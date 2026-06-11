'use client';

import toast from 'react-hot-toast';
import { useCallback } from 'react';
import toast from 'react-hot-toast';
import { useTransactionStore } from '@/store/transactionStore';
import * as transactionService from '@/services/transactionService';
import type { SendMoneyPayload } from '@/types';

export function useTransactions() {
  const { transactions, loading, setTransactions, setLoading } =
    useTransactionStore();

  const fetchTransactions = useCallback(async () => {
    setLoading(true);
    try {
      const data = await transactionService.getTransactions();
      setTransactions(data);
    } catch {
      toast.error('Failed to fetch transactions');
    } finally {
      setLoading(false);
    }
  }, [setLoading, setTransactions]);

  const sendMoney = useCallback(async (payload: SendMoneyPayload) => {
    setLoading(true);
    try {
      await transactionService.sendMoney(payload);
      toast.success('Transaction sent successfully');
      await fetchTransactions();
    } catch {
      toast.error('Failed to send transaction');
    } finally {
      setLoading(false);
    }
  }, [setLoading, fetchTransactions]);

  return { transactions, loading, fetchTransactions, sendMoney };
}
