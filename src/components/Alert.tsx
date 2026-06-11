import { clsx } from 'clsx';

interface AlertProps {
  title?: string;
  children: React.ReactNode;
  variant?: 'info' | 'success' | 'warning' | 'error';
  className?: string;
}

const variantClasses = {
  info: 'bg-blue-50 border-blue-200 text-blue-800',
  success: 'bg-green-50 border-green-200 text-green-800',
  warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
  error: 'bg-red-50 border-red-200 text-red-800',
};

export default function Alert({ title, children, variant = 'info', className }: AlertProps) {
  return (
    <div
      className={clsx(
        'border rounded-lg p-4',
        variantClasses[variant],
        className,
      )}
      role="alert"
    >
      {title && <h3 className="text-sm font-semibold mb-1">{title}</h3>}
      <div className="text-sm">{children}</div>
    </div>
  );
}
