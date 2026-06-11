'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { useWallet } from '@/hooks/useWallet';
import { useTransactions } from '@/hooks/useTransactions';
import { Asset } from '@/types';
import Card from '@/components/Card';
import Button from '@/components/Button';
import FormInput from '@/components/FormInput';

const sendSchema = z.object({
  recipient: z.string().min(1, 'Recipient address is required'),
  amount: z.string().min(1, 'Amount is required'),
  asset: z.nativeEnum(Asset),
});

type SendForm = z.infer<typeof sendSchema>;

export default function SendPage() {
  const { connected, connect } = useWallet();
  const { sendMoney, loading } = useTransactions();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SendForm>({
    resolver: zodResolver(sendSchema),
    defaultValues: {
      asset: Asset.XLM,
    },
  });

  async function onSubmit(data: SendForm) {
    await sendMoney({
      recipient: data.recipient,
      amount: data.amount,
      asset: data.asset,
    });
    reset();
  }

  if (!connected) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md w-full text-center">
          <h1 className="text-xl font-bold text-gray-900 mb-4">Send Money</h1>
          <p className="text-gray-600 mb-6">Connect your wallet to start sending money.</p>
          <Button onClick={connect}>Connect Wallet</Button>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Send Money</h1>

        <Card className="max-w-xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <FormInput
              label="Recipient Address"
              name="recipient"
              placeholder="G..."
              error={errors.recipient?.message}
              register={register as any}
            />

            <FormInput
              label="Amount"
              name="amount"
              type="number"
              placeholder="0.00"
              error={errors.amount?.message}
              register={register as any}
            />

            <div className="flex flex-col gap-1.5">
              <label htmlFor="asset" className="text-sm font-medium text-gray-700">
                Asset
              </label>
              <select
                id="asset"
                {...register('asset')}
                className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
              >
                <option value={Asset.XLM}>XLM</option>
                <option value={Asset.USDC}>USDC</option>
              </select>
            </div>

            <Button type="submit" loading={loading} className="w-full">
              Send
            </Button>
          </form>
        </Card>
      </div>
    </main>
  );
}
