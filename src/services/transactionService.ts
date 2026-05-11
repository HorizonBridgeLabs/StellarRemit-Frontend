import api from './api';
import type { Transaction, SendMoneyPayload } from '@/types';

/**
 * Sends money to a specific recipient address.
 * 
 * @param payload - The transaction payload containing recipient, amount, and asset type.
 * @param signal - Optional AbortSignal to cancel the request if the component unmounts.
 * @returns A promise that resolves to the newly created Transaction record.
 */
export async function sendMoney(
  payload: SendMoneyPayload,
  signal?: AbortSignal
): Promise<Transaction> {
  const { data } = await api.post<Transaction>('/transactions', payload, { signal });
  return data;
}

/**
 * Retrieves the transaction history for the authenticated user.
 * 
 * @param signal - Optional AbortSignal to cancel the request if the component unmounts.
 * @returns A promise that resolves to an array of Transaction records.
 */
export async function getTransactions(signal?: AbortSignal): Promise<Transaction[]> {
  const { data } = await api.get<Transaction[]>('/transactions', { signal });
  return data;
}
