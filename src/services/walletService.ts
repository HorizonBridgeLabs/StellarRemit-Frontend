import {
  isConnected,
  requestAccess,
  getPublicKey,
} from "@stellar/freighter-api";
import { Horizon } from "stellar-sdk";

const NETWORK = process.env.NEXT_PUBLIC_STELLAR_NETWORK ?? "TESTNET";

const HORIZON_URLS: Record<string, string> = {
  MAINNET: "https://horizon.stellar.org",
  TESTNET: "https://horizon-testnet.stellar.org",
};

import type { Balance } from '@/types';
import { Asset } from '@/types';

function getHorizonServer(): Horizon.Server {
  const url = HORIZON_URLS[NETWORK.toUpperCase()];
  if (!url) {
    throw new Error(
      `Unsupported Stellar network: "${NETWORK}". Expected MAINNET or TESTNET.`
    );
  }
  return new Horizon.Server(url);
}

/**
 * Returns true if the Freighter browser extension is installed and reachable.
 */
export function isFreighterInstalled(): boolean {
  if (typeof window === "undefined") return false;
  return Boolean((window as unknown as { freighter?: unknown }).freighter);
}

/**
 * Prompts the user to connect their Freighter wallet and returns the
 * selected public key.
 *
 * @throws if Freighter is not installed or the user denies access.
 */
export async function connectWallet(): Promise<string> {
  if (!isFreighterInstalled()) {
    throw new Error(
      "Freighter wallet is not installed. " +
        "Please install the Freighter extension from https://freighter.app and reload the page."
    );
  }

  const connected = await isConnected();
  if (!connected) {
    throw new Error(
      "Freighter is installed but not connected. " +
        "Please unlock your Freighter wallet and try again."
    );
  }

  await requestAccess();

  const publicKey = await getPublicKey();
  if (!publicKey) {
    throw new Error(
      "Freighter did not return a public key. The user may have denied access."
    );
  }

  return publicKey;
}

/**
 * Fetches the XLM and USDC balances for the given Stellar public key directly
 * from Horizon, using the network configured via NEXT_PUBLIC_STELLAR_NETWORK.
 *
 * @param publicKey - A valid Stellar G... public key.
 * @returns An array of Balance objects filtered to XLM and USDC.
 * @throws if the account does not exist on the network or the fetch fails.
 */
export async function getWalletBalance(publicKey: string): Promise<Balance[]> {
  if (!publicKey || !publicKey.startsWith("G")) {
    throw new Error(
      `Invalid Stellar public key: "${publicKey}". Keys must start with "G".`
    );
  }

  let account: Horizon.AccountResponse;
  try {
    const server = getHorizonServer();
    account = await server.loadAccount(publicKey);
  } catch (err: unknown) {
    const isNotFound =
      err instanceof Error &&
      (err.message.includes("404") || err.message.includes("Not Found"));

    if (isNotFound) {
      throw new Error(
        `Account ${publicKey} does not exist on ${NETWORK}. ` +
          "It may not be funded yet."
      );
    }

    throw new Error(
      `Failed to load account from Horizon (${NETWORK}): ${
        err instanceof Error ? err.message : String(err)
      }`
    );
  }

  const SUPPORTED_ASSETS = new Set(["XLM", "USDC"]);

  const balances: Balance[] = account.balances
    .filter((b: Horizon.HorizonApi.BalanceLine) => {
      if (b.asset_type === "native") return true;
      if (
        b.asset_type === "credit_alphanum4" ||
        b.asset_type === "credit_alphanum12"
      ) {
        return SUPPORTED_ASSETS.has(
          (b as Horizon.HorizonApi.BalanceLineAsset).asset_code
        );
      }
      return false;
    })
    .map((b: Horizon.HorizonApi.BalanceLine): Balance => {
      if (b.asset_type === "native") {
        return {
          asset: Asset.XLM,
          asset_type: "native",
          asset_code: "XLM",
          balance: b.balance,
          amount: b.balance,
        };
      }

      const asset = b as Horizon.HorizonApi.BalanceLineAsset;
      const code = asset.asset_code as Asset;
      return {
        asset: SUPPORTED_ASSETS.has(code) ? code : Asset.XLM,
        asset_type: asset.asset_type,
        asset_code: asset.asset_code,
        asset_issuer: asset.asset_issuer,
        balance: asset.balance,
        amount: asset.balance,
      };
    });

  return balances;
}