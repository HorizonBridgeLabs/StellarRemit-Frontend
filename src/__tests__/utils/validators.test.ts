import { isValidStellarPublicKey, isValidAmount, isSupportedAsset, isValidEmail } from '@/utils/validators';
import { Asset } from '@/types';

describe('isValidStellarPublicKey', () => {
  it('returns true for a valid 56-char G-key', () => {
    const key = 'G' + 'A'.repeat(55);
    expect(isValidStellarPublicKey(key)).toBe(true);
  });

  it('returns false for a key not starting with G', () => {
    expect(isValidStellarPublicKey('ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABC')).toBe(false);
  });

  it('returns false for a key that is too short', () => {
    expect(isValidStellarPublicKey('GA')).toBe(false);
  });

  it('returns false for empty string', () => {
    expect(isValidStellarPublicKey('')).toBe(false);
  });
});

describe('isValidAmount', () => {
  it('returns true for a positive amount', () => {
    expect(isValidAmount('100')).toBe(true);
  });

  it('returns true for a decimal amount', () => {
    expect(isValidAmount('0.5')).toBe(true);
  });

  it('returns false for zero', () => {
    expect(isValidAmount('0')).toBe(false);
  });

  it('returns false for negative amount', () => {
    expect(isValidAmount('-1')).toBe(false);
  });

  it('returns false for non-numeric string', () => {
    expect(isValidAmount('abc')).toBe(false);
  });
});

describe('isSupportedAsset', () => {
  it('returns true for XLM', () => {
    expect(isSupportedAsset('XLM')).toBe(true);
  });

  it('returns true for USDC', () => {
    expect(isSupportedAsset('USDC')).toBe(true);
  });

  it('returns false for unsupported asset', () => {
    expect(isSupportedAsset('BTC')).toBe(false);
  });
});

describe('isValidEmail', () => {
  it('returns true for a valid email', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
  });

  it('returns false for invalid email', () => {
    expect(isValidEmail('not-an-email')).toBe(false);
  });

  it('returns false for empty string', () => {
    expect(isValidEmail('')).toBe(false);
  });
});
