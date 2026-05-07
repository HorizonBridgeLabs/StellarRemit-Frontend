import { create } from "zustand";

export type Transaction = Record<string, unknown>;

export interface TransactionStoreState {
  transactions: Transaction[];
  loading: boolean;
  setTransactions: (txs: Transaction[]) => void;
  setLoading: (v: boolean) => void;
}

export const useTransactionStore = create<TransactionStoreState>((set) => ({
  transactions: [],
  loading: false,
  setTransactions: (txs) => set({ transactions: txs }),
  setLoading: (v) => set({ loading: v }),
}));
