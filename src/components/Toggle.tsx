import { clsx } from 'clsx';

interface ToggleProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

export default function Toggle({ label, checked, onChange, disabled = false, className }: ToggleProps) {
  const toggleId = `toggle-${label.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className={clsx('flex items-center gap-3', className)}>
      <button
        id={toggleId}
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={clsx(
          'relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200',
          checked ? 'bg-brand' : 'bg-gray-200',
          disabled && 'opacity-50 cursor-not-allowed',
        )}
      >
        <span
          className={clsx(
            'inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200',
            checked ? 'translate-x-6' : 'translate-x-1',
          )}
        />
      </button>
      <label htmlFor={toggleId} className="text-sm font-medium text-gray-700">
        {label}
      </label>
    </div>
  );
}
