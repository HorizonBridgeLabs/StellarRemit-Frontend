import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { Transaction } from '@/types';

interface TransactionStore {
  transactions: Transaction[];
  loading: boolean;
  setTransactions: (txs: Transaction[]) => void;
  setLoading: (v: boolean) => void;
}

export const useTransactionStore = create<TransactionStore>()(
  devtools(
    (set) => ({
      transactions: [],
      loading: false,
      setTransactions: (transactions) => set({ transactions }),
      setLoading: (loading) => set({ loading }),
    }),
    { name: 'TransactionStore' }
  )
);
