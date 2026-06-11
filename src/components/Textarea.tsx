import { clsx } from 'clsx';

interface TextareaProps {
  label: string;
  name: string;
  placeholder?: string;
  rows?: number;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  disabled?: boolean;
  className?: string;
}

export default function Textarea({
  label,
  name,
  placeholder,
  rows = 4,
  value,
  onChange,
  error,
  disabled = false,
  className,
}: TextareaProps) {
  const inputId = `textarea-${name}`;
  const errorId = `textarea-error-${name}`;

  return (
    <div className={clsx('flex flex-col gap-1.5', className)}>
      <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        id={inputId}
        name={name}
        placeholder={placeholder}
        rows={rows}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={clsx(
          'w-full px-3 py-2.5 rounded-lg border text-sm text-gray-900',
          'placeholder:text-gray-400',
          'focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand',
          'disabled:opacity-50 disabled:cursor-not-allowed resize-y',
          error ? 'border-red-400 focus:ring-red-400 focus:border-red-400' : 'border-gray-300',
        )}
      />
      {error && (
        <p id={errorId} className="text-xs text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
