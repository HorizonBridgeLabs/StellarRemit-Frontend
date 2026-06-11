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
  loading: boolean;
  error: string | null;
}

/**
 * Wallet store actions
 */
interface WalletStoreActions {
  setWallet: (key: string) => void;
  setConnected: (key: string) => void;
  setBalances: (balances: Balance[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  disconnect: () => void;
  reset: () => void;
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
  loading: false,
  error: null,
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
       * Connect wallet with a public key (legacy alias)
       */
      setWallet: (key: string) =>
        set(() => ({
          publicKey: key,
          connected: true,
        })),

      /**
       * Connect wallet with a public key
       */
      setConnected: (key: string) =>
        set(() => ({
          publicKey: key,
          connected: true,
          error: null,
        })),

      /**
       * Update wallet balances
       */
      setBalances: (balances: Balance[]) =>
        set(() => ({
          balances,
        })),

      /**
       * Set loading state
       */
      setLoading: (loading: boolean) =>
        set(() => ({
          loading,
        })),

      /**
       * Set error state
       */
      setError: (error: string | null) =>
        set(() => ({
          error,
        })),

      /**
       * Disconnect wallet and reset state
       */
      disconnect: () =>
        set(() => ({
          publicKey: null,
          connected: false,
          balances: [],
          loading: false,
          error: null,
        })),

      /**
       * Reset wallet state to initial
       */
      reset: () =>
        set(() => initialState),
    }),
    {
      name: 'WalletStore',
    }
  )
);
