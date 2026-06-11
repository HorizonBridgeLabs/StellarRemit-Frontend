/**
 * Format a Stellar public key for display
 * @param key - Full public key
 * @param start - Number of chars to show at start
 * @param end - Number of chars to show at end
 */
export function truncateKey(key: string, start = 4, end = 4): string {
  if (!key || key.length <= start + end + 3) return key;
  return `${key.slice(0, start)}...${key.slice(-end)}`;
}

/**
 * Format a number as currency with 2 decimal places
 */
export function formatCurrency(value: string | number, currency = 'USD'): string {
  const num = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(num)) return '—';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 7,
  }).format(num);
}

/**
 * Format a date string to a readable format
 */
export function formatDate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  if (isNaN(d.getTime())) return '—';
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(d);
}

/**
 * Capitalize the first letter of a string
 */
export function capitalize(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
