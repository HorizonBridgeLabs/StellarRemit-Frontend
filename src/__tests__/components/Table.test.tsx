import { render, screen } from '@testing-library/react';
import Table from '@/components/Table';

interface TestRow {
  id: string;
  name: string;
  value: number;
}

const columns = [
  { key: 'name' as keyof TestRow, label: 'Name' },
  { key: 'value' as keyof TestRow, label: 'Value' },
];

const data: TestRow[] = [
  { id: '1', name: 'Alice', value: 100 },
  { id: '2', name: 'Bob', value: 200 },
];

describe('Table', () => {
  it('renders column headers', () => {
    render(<Table columns={columns} data={data} />);
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Value')).toBeInTheDocument();
  });

  it('renders data rows', () => {
    render(<Table columns={columns} data={data} />);
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.getByText('200')).toBeInTheDocument();
  });

  it('shows empty state when data is empty', () => {
    render(<Table columns={columns} data={[]} />);
    expect(screen.getByText('No data available.')).toBeInTheDocument();
  });

  it('shows skeleton rows when loading', () => {
    render(<Table columns={columns} data={[]} loading />);
    const rows = screen.getAllByRole('row');
    expect(rows.length).toBeGreaterThan(1);
  });
});
