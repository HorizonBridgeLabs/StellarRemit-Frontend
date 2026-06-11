import { clsx } from 'clsx';
import type { Balance } from '@/types';

interface BalanceCardProps {
  balance: Balance;
  className?: string;
}

export default function BalanceCard({ balance, className }: BalanceCardProps) {
  return (
    <div
      className={clsx(
        'bg-white rounded-xl border border-gray-200 p-4 flex items-center justify-between',
        'hover:shadow-sm transition-shadow',
        className,
      )}
    >
      <div>
        <p className="text-xs text-gray-500 uppercase tracking-wide">{balance.asset_code}</p>
        <p className="text-lg font-semibold text-gray-900 mt-0.5">{balance.balance}</p>
      </div>
      <div className="h-10 w-10 rounded-full bg-brand/10 flex items-center justify-center">
        <span className="text-sm font-bold text-brand">{balance.asset_code.charAt(0)}</span>
      </div>
    </div>
  );
}
