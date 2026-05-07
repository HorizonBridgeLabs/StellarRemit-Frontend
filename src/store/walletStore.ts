import { create } from "zustand";
import type { WalletState, WalletBalance } from "@/types/wallet";

interface WalletStore extends WalletState {
  setConnected: (publicKey: string) => void;
  setBalances: (balances: WalletBalance[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;
}

const initialState: WalletState = {
  publicKey: null,
  balances: [],
  connected: false,
  loading: false,
  error: null,
};

export const useWalletStore = create<WalletStore>((set) => ({
  ...initialState,
  setConnected: (publicKey) => set({ publicKey, connected: true }),
  setBalances: (balances) => set({ balances }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  reset: () => set(initialState),
}));
