import { Asset } from '@/types';

/**
 * Validate a Stellar public key
 * @param key - Public key to validate
 */
export function isValidStellarPublicKey(key: string): boolean {
  if (!key || typeof key !== 'string') return false;
  return key.startsWith('G') && key.length === 56;
}

/**
 * Validate a positive numeric amount string
 * @param amount - Amount string to validate
 */
export function isValidAmount(amount: string): boolean {
  if (!amount || typeof amount !== 'string') return false;
  const num = parseFloat(amount);
  return !isNaN(num) && num > 0;
}

/**
 * Validate that an asset is supported
 * @param asset - Asset to validate
 */
export function isSupportedAsset(asset: string): asset is Asset {
  return Object.values(Asset).includes(asset as Asset);
}

/**
 * Validate email address format
 * @param email - Email to validate
 */
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
