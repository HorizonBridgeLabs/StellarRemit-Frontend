import { useWalletStore } from "@/store/walletStore";
import { walletService } from "@/services/walletService";

export function useWallet() {
  const { publicKey, balances, connected, loading, error, setConnected, setBalances, setLoading, setError, reset } =
    useWalletStore();

  async function connect() {
    setLoading(true);
    setError(null);
    try {
      const publicKey = await walletService.connectWallet();
      setConnected(publicKey);
      const balances = await walletService.fetchBalances(publicKey);
      setBalances(balances);
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
