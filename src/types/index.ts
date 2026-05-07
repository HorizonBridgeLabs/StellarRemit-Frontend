export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Balance {
  asset: string;
  amount: string;
}

export interface WalletState {
  publicKey: string | null;
  connected: boolean;
  balances: Balance[];
}

export interface Transaction {
  id: string;
  recipient: string;
  amount: string;
  asset: string;
  status: 'pending' | 'success' | 'failed';
  createdAt: string;
}

export interface SendMoneyPayload {
  recipient: string;
  amount: string;
  asset: 'XLM' | 'USDC';
}
