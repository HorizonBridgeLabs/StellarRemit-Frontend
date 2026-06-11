'use client';

import { useEffect } from 'react';
import { useWallet } from '@/hooks/useWallet';
import { useTransactions } from '@/hooks/useTransactions';
import Card from '@/components/Card';
import Table from '@/components/Table';
import WalletConnectButton from '@/components/WalletConnectButton';
import BalanceCard from '@/components/BalanceCard';
import type { Transaction } from '@/types';

export default function DashboardPage() {
  const { publicKey, balances, connected, error: walletError } = useWallet();
  const { transactions, loading: txLoading, fetchTransactions } = useTransactions();

  useEffect(() => {
    if (connected) {
      fetchTransactions();
    }
  }, [connected, fetchTransactions]);

  const columns = [
    { key: 'id' as keyof Transaction, label: 'ID' },
    { key: 'recipient' as keyof Transaction, label: 'Recipient' },
    { key: 'amount' as keyof Transaction, label: 'Amount' },
    { key: 'asset' as keyof Transaction, label: 'Asset' },
    { key: 'status' as keyof Transaction, label: 'Status' },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>

        {walletError && (
          <Card className="mb-6 border-red-200">
            <p className="text-sm text-red-600">{walletError}</p>
          </Card>
        )}

        {!connected && (
          <Card className="mb-6">
            <div className="flex items-center justify-between">
              <p className="text-gray-700">Connect your wallet to view your balance and transactions.</p>
              <WalletConnectButton />
            </div>
          </Card>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card title="Wallet">
            {connected ? (
              <div>
                <p className="text-sm text-gray-500 mb-1">Public Key</p>
                <p className="text-sm font-mono text-gray-900 break-all">{publicKey}</p>
              </div>
            ) : (
              <p className="text-gray-500">No wallet connected</p>
            )}
          </Card>

          <Card title="Balance">
            {balances.length > 0 ? (
              <div className="space-y-3">
                {balances.map((b, i) => (
                  <BalanceCard key={i} balance={b} />
                ))}
              </div>
            ) : (
              <p className="text-gray-500">{connected ? 'No balances found' : 'Connect wallet to view'}</p>
            )}
          </Card>

          <Card title="Transactions">
            <p className="text-sm text-gray-600">
              {transactions.length} transaction{transactions.length !== 1 ? 's' : ''}
            </p>
          </Card>
        </div>

        <Card title="Recent Transactions">
          <Table columns={columns} data={transactions.slice(0, 5)} loading={txLoading} />
        </Card>
      </div>
    </main>
  );
}
