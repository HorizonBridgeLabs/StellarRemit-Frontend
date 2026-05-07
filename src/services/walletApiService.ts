import api from './api';
import type { Balance } from '@/types';

export async function getBalance(publicKey: string): Promise<Balance[]> {
  const { data } = await api.get<Balance[]>('/wallet/balance', {
    params: { address: publicKey },
  });
  return data;
}
