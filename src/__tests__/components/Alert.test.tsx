import { render, screen } from '@testing-library/react';
import Alert from '@/components/Alert';

describe('Alert', () => {
  it('renders children', () => {
    render(<Alert>Alert message</Alert>);
    expect(screen.getByText('Alert message')).toBeInTheDocument();
  });

  it('renders title when provided', () => {
    render(<Alert title="Warning">Alert message</Alert>);
    expect(screen.getByText('Warning')).toBeInTheDocument();
  });

  it('has alert role', () => {
    render(<Alert>Alert message</Alert>);
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('applies error variant', () => {
    const { container } = render(<Alert variant="error">Error</Alert>);
    expect(container.firstChild).toHaveClass('bg-red-50');
  });

  it('applies success variant', () => {
    const { container } = render(<Alert variant="success">Success</Alert>);
    expect(container.firstChild).toHaveClass('bg-green-50');
  });
});
