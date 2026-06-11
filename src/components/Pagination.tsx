import { clsx } from 'clsx';
import Button from './Button';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export default function Pagination({ currentPage, totalPages, onPageChange, className }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const visiblePages = pages.filter((page) => {
    if (totalPages <= 7) return true;
    if (page === 1 || page === totalPages) return true;
    if (page >= currentPage - 1 && page <= currentPage + 1) return true;
    return false;
  });

  return (
    <nav className={clsx('flex items-center gap-2', className)} aria-label="Pagination">
      <Button
        variant="outline"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        Previous
      </Button>
      <div className="flex items-center gap-1">
        {visiblePages.map((page, index) => {
          const showEllipsis = index > 0 && visiblePages[index - 1] !== page - 1;
          return (
            <div key={page} className="flex items-center gap-1">
              {showEllipsis && <span className="px-2 text-gray-400">...</span>}
              <button
                onClick={() => onPageChange(page)}
                className={clsx(
                  'h-8 w-8 rounded-lg text-sm font-medium transition-colors',
                  page === currentPage
                    ? 'bg-brand text-white'
                    : 'text-gray-600 hover:bg-gray-100',
                )}
                aria-current={page === currentPage ? 'page' : undefined}
              >
                {page}
              </button>
            </div>
          );
        })}
      </div>
      <Button
        variant="outline"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        Next
      </Button>
    </nav>
  );
}
