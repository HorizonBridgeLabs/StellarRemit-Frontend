import { create } from 'zustand';
import type { Balance } from '@/types';

interface WalletStore {
  publicKey: string | null;
  connected: boolean;
  balances: Balance[];
  setWallet: (key: string) => void;
  setBalances: (balances: Balance[]) => void;
  disconnect: () => void;
}

export const useWalletStore = create<WalletStore>((set) => ({
  publicKey: null,
  connected: false,
  balances: [],
  setWallet: (key) => set({ publicKey: key, connected: true }),
  setBalances: (balances) => set({ balances }),
  disconnect: () => set({ publicKey: null, connected: false, balances: [] }),
}));
