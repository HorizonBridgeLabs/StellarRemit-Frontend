'use client';

import { useEffect } from 'react';
import { useTransactions } from '@/hooks/useTransactions';
import { useWallet } from '@/hooks/useWallet';
import Card from '@/components/Card';
import Table from '@/components/Table';
import Button from '@/components/Button';
import type { Transaction } from '@/types';

export default function HistoryPage() {
  const { connected, connect } = useWallet();
  const { transactions, loading, fetchTransactions } = useTransactions();

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
    { key: 'createdAt' as keyof Transaction, label: 'Date' },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Transaction History</h1>

        {!connected && (
          <Card className="mb-6">
            <div className="flex items-center justify-between">
              <p className="text-gray-700">Connect your wallet to view transaction history.</p>
              <Button onClick={connect}>Connect Wallet</Button>
            </div>
          </Card>
        )}

        <Card>
          <Table columns={columns} data={transactions} loading={loading} />
        </Card>
      </div>
    </main>
  );
}
