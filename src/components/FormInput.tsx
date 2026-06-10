'use client';

import type { UseFormRegister, FieldValues } from 'react-hook-form';

export interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
  register: UseFormRegister<FieldValues>;
}

export default function FormInput({
  label,
  name,
  type = 'text',
  placeholder,
  error,
  register,
}: FormInputProps) {
  const inputId = `form-input-${name}`;
  const errorId = `form-input-error-${name}`;

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={inputId}
        className="text-sm font-medium text-gray-700"
      >
        {label}
      </label>

      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={`
          w-full px-3 py-2.5 rounded-lg border text-sm text-gray-900
          placeholder:text-gray-400
          transition-colors duration-150
          focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand
          disabled:opacity-50 disabled:cursor-not-allowed
          ${
            error
              ? 'border-red-400 focus:ring-red-400 focus:border-red-400'
              : 'border-gray-300'
          }
        `}
        {...register(name)}
      />

      {error && (
        <p id={errorId} className="text-xs text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
