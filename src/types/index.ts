// ============================================================================
// Enums
// ============================================================================

/** Supported blockchain assets */
export enum Asset {
  XLM = 'XLM',
  USDC = 'USDC',
}

/** Transaction status states */
export enum TransactionStatus {
  PENDING = 'pending',
  SUCCESS = 'success',
  FAILED = 'failed',
}

// ============================================================================
// Domain Types
// ============================================================================

/**
 * Represents a user in the system
 */
export interface User {
  /** Unique identifier for the user */
  id: string;
  /** User's email address */
  email: string;
  /** User's full name */
  name: string;
}

/**
 * Represents the balance of a specific asset
 */
export interface Balance {
  /** Asset type (XLM, USDC, etc.) */
  asset: Asset;
  /** Asset code string representation */
  asset_code: string;
  /** Asset type from Horizon */
  asset_type: string;
  /** Asset issuer (optional for non-native assets) */
  asset_issuer?: string;
  /** Amount as a string to preserve precision */
  amount: string;
  /** Balance string alias */
  balance: string;
}

/**
 * Represents the current state of a user's wallet
 */
export interface WalletState {
  /** Stellar public key (null when disconnected) */
  publicKey: string | null;
  /** Whether the wallet is currently connected */
  connected: boolean;
  /** Array of asset balances */
  balances: Balance[];
}

/**
 * Discriminated union for transaction status to ensure type safety
 */
export type TransactionStatusUnion =
  | { status: TransactionStatus.PENDING; errorMessage?: string }
  | { status: TransactionStatus.SUCCESS; txHash: string }
  | { status: TransactionStatus.FAILED; errorMessage: string };

/**
 * Represents a transaction record
 */
export interface Transaction {
  /** Unique transaction identifier */
  id: string;
  /** Recipient's wallet address */
  recipient: string;
  /** Amount transferred as a string to preserve precision */
  amount: string;
  /** Asset type (XLM or USDC) */
  asset: Asset;
  /** Current status of the transaction */
  status: TransactionStatus;
  /** ISO 8601 timestamp of transaction creation */
  createdAt: string;
}

/**
 * Payload for sending money between wallets
 */
export interface SendMoneyPayload {
  /** Recipient's wallet address */
  recipient: string;
  /** Amount to send as a string to preserve precision */
  amount: string;
  /** Asset type to send */
  asset: Asset;
}

// ============================================================================
// API Response Types
// ============================================================================

/**
 * Generic API response wrapper
 */
export interface ApiResponse<T> {
  /** Response data */
  data: T;
  /** Success status */
  success: boolean;
  /** Optional error message */
  message?: string;
}

/**
 * API error response
 */
export interface ApiError {
  /** Error code for categorization */
  code: string;
  /** Human-readable error message */
  message: string;
  /** Additional error details */
  details?: Record<string, unknown>;
}

/**
 * Paginated API response
 */
export interface PaginatedResponse<T> {
  /** Array of items */
  items: T[];
  /** Total number of items */
  total: number;
  /** Current page number */
  page: number;
  /** Items per page */
  pageSize: number;
}

// ============================================================================
// Utility Types
// ============================================================================

/** Makes all properties of T optional */
export type Partial<T> = {
  [P in keyof T]?: T[P];
};

/** Extracts the type of a promise */
export type Awaited<T> = T extends PromiseLike<infer U> ? U : T;
