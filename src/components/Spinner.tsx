import { clsx } from 'clsx';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'h-4 w-4 border-2',
  md: 'h-6 w-6 border-2',
  lg: 'h-10 w-10 border-4',
};

export default function Spinner({ size = 'md', className }: SpinnerProps) {
  return (
    <div
      className={clsx(
        'border-brand border-t-transparent rounded-full animate-spin',
        sizeClasses[size],
        className,
      )}
      aria-label="Loading"
      role="status"
    />
  );
}
