import { clsx } from 'clsx';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  label: string;
  name: string;
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  disabled?: boolean;
  className?: string;
}

export default function Select({
  label,
  name,
  options,
  value,
  onChange,
  error,
  disabled = false,
  className,
}: SelectProps) {
  const inputId = `select-${name}`;
  const errorId = `select-error-${name}`;

  return (
    <div className={clsx('flex flex-col gap-1.5', className)}>
      <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id={inputId}
        name={name}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={clsx(
          'w-full px-3 py-2.5 rounded-lg border text-sm text-gray-900 bg-white',
          'focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          error ? 'border-red-400 focus:ring-red-400 focus:border-red-400' : 'border-gray-300',
        )}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={errorId} className="text-xs text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
