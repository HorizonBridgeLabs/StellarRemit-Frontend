import { create } from "zustand";

export type Transaction = Record<string, unknown>;

export interface TransactionStoreState {
import { create } from 'zustand';
import type { Transaction } from '@/types';

interface TransactionStore {
  transactions: Transaction[];
  loading: boolean;
  setTransactions: (txs: Transaction[]) => void;
  setLoading: (v: boolean) => void;
}

export const useTransactionStore = create<TransactionStore>((set) => ({
  transactions: [],
  loading: false,
  setTransactions: (transactions) => set({ transactions }),
  setLoading: (loading) => set({ loading }),
}));
