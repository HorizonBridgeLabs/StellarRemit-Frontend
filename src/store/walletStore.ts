import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { Balance } from '@/types';

/**
 * Wallet store state
 */
interface WalletStoreState {
  publicKey: string | null;
  connected: boolean;
  balances: Balance[];
}

/**
 * Wallet store actions
 */
interface WalletStoreActions {
  setWallet: (key: string) => void;
  setBalances: (balances: Balance[]) => void;
  disconnect: () => void;
}

/**
 * Combined wallet store type
 */
type WalletStore = WalletStoreState & WalletStoreActions;

/**
 * Initial wallet state
 */
const initialState: WalletStoreState = {
  publicKey: null,
  connected: false,
  balances: [],
};

/**
 * Wallet store using Zustand
 * Manages wallet connection state, public key, and asset balances
 */
export const useWalletStore = create<WalletStore>()(
  devtools(
    (set) => ({
      // State
      ...initialState,

      // Actions
      /**
       * Connect wallet with a public key
       */
      setWallet: (key: string) =>
        set((state) => ({
          publicKey: key,
          connected: true,
        })),

      /**
       * Update wallet balances
       */
      setBalances: (balances: Balance[]) =>
        set((state) => ({
          balances,
        })),

      /**
       * Disconnect wallet and reset state
       */
      disconnect: () =>
        set(() => ({
          publicKey: null,
          connected: false,
          balances: [],
        })),
    }),
    {
      name: 'WalletStore',
    }
  )
);
