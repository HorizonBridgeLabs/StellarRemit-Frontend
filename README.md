# StellarRemit

Cross-border remittance platform built on the Stellar blockchain.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Zustand (state management)
- Axios (API calls)
- Freighter Wallet (Stellar)
- Zod (validation)
- react-hot-toast (notifications)

## Getting Started

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/          # Next.js App Router pages & layouts
├── components/   # Reusable UI components
├── hooks/        # Custom React hooks
├── store/        # Zustand state stores
├── services/     # Axios API service layer
├── types/        # TypeScript type definitions
└── utils/        # Helper utilities
```

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_API_URL` | Backend API base URL |
| `NEXT_PUBLIC_STELLAR_NETWORK` | `testnet` or `mainnet` |
