import { render, screen } from '@testing-library/react';
import Spinner from '@/components/Spinner';

describe('Spinner', () => {
  it('renders with default size', () => {
    render(<Spinner />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('renders with sm size', () => {
    const { container } = render(<Spinner size="sm" />);
    expect(container.firstChild).toHaveClass('h-4');
  });

  it('renders with lg size', () => {
    const { container } = render(<Spinner size="lg" />);
    expect(container.firstChild).toHaveClass('h-10');
  });

  it('applies custom className', () => {
    const { container } = render(<Spinner className="my-class" />);
    expect(container.firstChild).toHaveClass('my-class');
  });
});
