import api from './api';
import type { Transaction, SendMoneyPayload } from '@/types';

export async function sendMoney(payload: SendMoneyPayload): Promise<Transaction> {
  const { data } = await api.post<Transaction>('/transactions', payload);
  return data;
}

export async function getTransactions(): Promise<Transaction[]> {
  const { data } = await api.get<Transaction[]>('/transactions');
  return data;
}
