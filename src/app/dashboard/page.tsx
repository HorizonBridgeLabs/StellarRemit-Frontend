'use client';

import { useEffect } from 'react';
import { useWallet } from '@/hooks/useWallet';
import { useTransactions } from '@/hooks/useTransactions';
import Card from '@/components/Card';
import Table from '@/components/Table';
import Button from '@/components/Button';
import type { Transaction } from '@/types';

export default function DashboardPage() {
  const { publicKey, balances, connected, loading: walletLoading, connect } = useWallet();
  const { transactions, loading: txLoading, fetchTransactions } = useTransactions();

  useEffect(() => {
    if (connected) {
      fetchTransactions();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connected]);

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

        {!connected && (
          <Card className="mb-6">
            <div className="flex items-center justify-between">
              <p className="text-gray-700">Connect your wallet to view your balance and transactions.</p>
              <Button onClick={connect} loading={walletLoading}>Connect Wallet</Button>
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
              <ul className="space-y-2">
                {balances.map((b, i) => (
                  <li key={i} className="flex justify-between text-sm">
                    <span className="text-gray-600">{b.asset_code}</span>
                    <span className="font-medium text-gray-900">{b.balance}</span>
                  </li>
                ))}
              </ul>
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
