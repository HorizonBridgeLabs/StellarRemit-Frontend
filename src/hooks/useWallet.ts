import { useWalletStore } from "@/store/walletStore";
import * as walletService from "@/services/walletService";

export function useWallet() {
  const { publicKey, balances, connected, loading, error, setConnected, setBalances, setLoading, setError, reset } =
    useWalletStore();

  async function connect() {
    setLoading(true);
    setError(null);
    try {
      const key = await walletService.connectWallet();
      setConnected(key);
      const fetchedBalances = await walletService.getWalletBalance(key);
      setBalances(fetchedBalances);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to connect wallet");
    } finally {
      setLoading(false);
    }
  }

  function disconnect() {
    reset();
  }

  return { publicKey, balances, connected, loading, error, connect, disconnect };
}
