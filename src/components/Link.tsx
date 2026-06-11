import React from 'react';
import NextLink from 'next/link';
import { clsx, type ClassValue } from 'clsx';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: ClassValue;
  external?: boolean;
  underline?: boolean;
  variant?: 'default' | 'muted' | 'primary';
}

export function Link({
  href,
  children,
  className,
  external = false,
  underline = true,
  variant = 'default',
}: LinkProps) {
  const variantStyles = {
    default: 'text-gray-900 dark:text-gray-100',
    muted: 'text-gray-500 dark:text-gray-400',
    primary: 'text-blue-600 dark:text-blue-400',
  };

  const linkStyles = clsx(
    'transition-colors hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm',
    variantStyles[variant],
    underline && 'underline underline-offset-2',
    className
  );

  if (external) {
    return (
      <a
        href={href}
        className={linkStyles}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={linkStyles}>
      {children}
    </NextLink>
  );
}
