import {
  getPublicKey,
  isConnected,
  requestAccess,
} from "@stellar/freighter-api";
import api from "./api";
import type { WalletBalance } from "@/types/wallet";

export const walletService = {
  async connectWallet(): Promise<string> {
    const connected = await isConnected();
    if (!connected) throw new Error("Freighter wallet not found");
    await requestAccess();
    const publicKey = await getPublicKey();
    return publicKey;
  },

  async fetchBalances(publicKey: string): Promise<WalletBalance[]> {
    const { data } = await api.get<WalletBalance[]>(
      `/wallet/${publicKey}/balances`
    );
    return data;
  },
};
