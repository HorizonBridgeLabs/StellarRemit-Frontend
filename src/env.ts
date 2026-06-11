import { z } from 'zod';

/**
 * Validates environment variables at build time.
 * Ensures required public env vars are present and correctly formatted.
 */
const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url().min(1),
  NEXT_PUBLIC_STELLAR_NETWORK: z.enum(['testnet', 'public', 'futurenet']),
});

/**
 * Parsed and validated environment variables.
 * Throws at build time if any required variable is missing or invalid.
 */
export const env = envSchema.parse({
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  NEXT_PUBLIC_STELLAR_NETWORK: process.env.NEXT_PUBLIC_STELLAR_NETWORK,
});

/**
 * Type inference for the validated environment variables.
 */
export type Env = z.infer<typeof envSchema>;
