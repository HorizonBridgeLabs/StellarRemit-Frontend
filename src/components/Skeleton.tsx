import { clsx } from 'clsx';

interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
}

export default function Skeleton({ className, width, height }: SkeletonProps) {
  return (
    <div
      className={clsx('animate-pulse bg-gray-200 rounded', className)}
      style={{ width, height }}
      aria-hidden="true"
    />
  );
}
