import React from 'react';
import { clsx, type ClassValue } from 'clsx';

interface DividerProps {
  className?: ClassValue;
  orientation?: 'horizontal' | 'vertical';
  variant?: 'solid' | 'dashed' | 'dotted';
  label?: string;
}

export function Divider({
  className,
  orientation = 'horizontal',
  variant = 'solid',
  label,
}: DividerProps) {
  const baseStyles = 'border-gray-200 dark:border-gray-700';

  const orientationStyles = {
    horizontal: 'w-full border-t',
    vertical: 'h-full border-l',
  };

  const variantStyles = {
    solid: '',
    dashed: 'border-dashed',
    dotted: 'border-dotted',
  };

  if (label) {
    return (
      <div className={clsx('flex items-center', className)}>
        <div
          className={clsx(
            baseStyles,
            orientationStyles.horizontal,
            variantStyles[variant],
            'flex-1'
          )}
        />
        <span className="mx-4 text-sm text-gray-500 dark:text-gray-400">
          {label}
        </span>
        <div
          className={clsx(
            baseStyles,
            orientationStyles.horizontal,
            variantStyles[variant],
            'flex-1'
          )}
        />
      </div>
    );
  }

  return (
    <div
      className={clsx(baseStyles, orientationStyles[orientation], variantStyles[variant], className)}
      role="separator"
      aria-orientation={orientation}
    />
  );
}
