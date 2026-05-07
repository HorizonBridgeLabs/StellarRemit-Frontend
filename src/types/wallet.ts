export interface WalletBalance {
  asset: string;
  balance: string;
}

export interface WalletState {
  publicKey: string | null;
  balances: WalletBalance[];
  connected: boolean;
  loading: boolean;
  error: string | null;
}
