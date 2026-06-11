import { z } from 'zod';

/**
 * Validates environment variables at runtime.
 * Ensures required public env vars are present and correctly formatted.
 */
const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url().default('http://localhost:8000/api'),
  NEXT_PUBLIC_STELLAR_NETWORK: z.enum(['testnet', 'public', 'futurenet']).default('testnet'),
});

let cachedEnv: ReturnType<typeof envSchema.parse> | null = null;

/**
 * Lazily parse and validate environment variables.
 * Returns defaults if variables are not set (safe for build/CI).
 */
export function getEnv(): ReturnType<typeof envSchema.parse> {
  if (cachedEnv) return cachedEnv;
  cachedEnv = envSchema.parse({
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_STELLAR_NETWORK: process.env.NEXT_PUBLIC_STELLAR_NETWORK,
  });
  return cachedEnv;
}

/**
 * Type inference for the validated environment variables.
 */
export type Env = z.infer<typeof envSchema>;
