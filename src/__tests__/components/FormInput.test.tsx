import { render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import FormInput from '@/components/FormInput';

function TestForm(props: { error?: string }) {
  const { register } = useForm();
  return (
    <form>
      <FormInput
        label="Email"
        name="email"
        placeholder="Enter email"
        error={props.error}
        register={register}
      />
    </form>
  );
}

describe('FormInput', () => {
  it('renders label', () => {
    render(<TestForm />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('renders input with placeholder', () => {
    render(<TestForm />);
    expect(screen.getByPlaceholderText('Enter email')).toBeInTheDocument();
  });

  it('shows error message when error prop is provided', () => {
    render(<TestForm error="Invalid email" />);
    expect(screen.getByRole('alert')).toHaveTextContent('Invalid email');
  });
});
