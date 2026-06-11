'use client';

import { useWallet } from '@/hooks/useWallet';
import Button from '@/components/Button';

interface WalletConnectButtonProps {
  className?: string;
}

export default function WalletConnectButton({ className }: WalletConnectButtonProps) {
  const { publicKey, connected, loading, connect, disconnect } = useWallet();

  const truncated = publicKey
    ? `${publicKey.slice(0, 4)}...${publicKey.slice(-4)}`
    : null;

  if (connected && truncated) {
    return (
      <Button
        onClick={disconnect}
        variant="outline"
        className={className}
      >
        {truncated}
      </Button>
    );
  }

  return (
    <Button
      onClick={connect}
      loading={loading}
      className={className}
    >
      {loading ? 'Connecting...' : 'Connect Wallet'}
    </Button>
  );
}
