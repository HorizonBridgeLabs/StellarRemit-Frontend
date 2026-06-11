import { truncateKey, formatCurrency, formatDate, capitalize } from '@/utils/formatters';

describe('truncateKey', () => {
  it('truncates a long key correctly', () => {
    const key = 'G' + 'A'.repeat(55);
    expect(truncateKey(key)).toBe('GAAA...AAAA');
  });

  it('returns short keys unchanged', () => {
    expect(truncateKey('GABC')).toBe('GABC');
  });

  it('returns empty string for empty input', () => {
    expect(truncateKey('')).toBe('');
  });
});

describe('formatCurrency', () => {
  it('formats a number as USD', () => {
    expect(formatCurrency('1234.56')).toBe('$1,234.56');
  });

  it('formats a number value', () => {
    expect(formatCurrency(99.99)).toBe('$99.99');
  });

  it('returns em dash for invalid input', () => {
    expect(formatCurrency('abc')).toBe('—');
  });
});

describe('formatDate', () => {
  it('formats a valid date string', () => {
    const result = formatDate('2024-06-01T12:00:00Z');
    expect(result).toContain('Jun');
  });

  it('returns em dash for invalid date', () => {
    expect(formatDate('not-a-date')).toBe('—');
  });
});

describe('capitalize', () => {
  it('capitalizes the first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('returns empty string for empty input', () => {
    expect(capitalize('')).toBe('');
  });
});
