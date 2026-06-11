import Image from 'next/image';
import { clsx } from 'clsx';

interface AvatarProps {
  name: string;
  src?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-14 w-14 text-base',
};

const sizePixels = {
  sm: 32,
  md: 40,
  lg: 56,
};

export default function Avatar({ name, src, size = 'md', className }: AvatarProps) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  if (src) {
    return (
      <Image
        src={src}
        alt={name}
        width={sizePixels[size]}
        height={sizePixels[size]}
        className={clsx('rounded-full object-cover', sizeClasses[size], className)}
        unoptimized
      />
    );
  }

  return (
    <div
      className={clsx(
        'rounded-full bg-brand text-white flex items-center justify-center font-medium',
        sizeClasses[size],
        className,
      )}
      aria-label={name}
    >
      {initials}
    </div>
  );
}
