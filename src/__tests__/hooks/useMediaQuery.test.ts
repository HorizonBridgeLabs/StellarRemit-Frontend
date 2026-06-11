import { renderHook } from '@testing-library/react';
import { useMediaQuery, useIsMobile, useIsTablet, useIsDesktop } from '@/hooks/useMediaQuery';

describe('useMediaQuery', () => {
  const originalMatchMedia = window.matchMedia;

  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query: string) => ({
        matches: query.includes('1025px'),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      })),
    });
  });

  afterEach(() => {
    window.matchMedia = originalMatchMedia;
  });

  it('returns false for mobile query when desktop matches', () => {
    const { result } = renderHook(() => useMediaQuery('(max-width: 768px)'));
    expect(result.current).toBe(false);
  });

  it('returns true for desktop query when desktop matches', () => {
    const { result } = renderHook(() => useMediaQuery('(min-width: 1025px)'));
    expect(result.current).toBe(true);
  });
});

describe('responsive helpers', () => {
  it('useIsMobile returns boolean', () => {
    const { result } = renderHook(() => useIsMobile());
    expect(typeof result.current).toBe('boolean');
  });

  it('useIsTablet returns boolean', () => {
    const { result } = renderHook(() => useIsTablet());
    expect(typeof result.current).toBe('boolean');
  });

  it('useIsDesktop returns boolean', () => {
    const { result } = renderHook(() => useIsDesktop());
    expect(typeof result.current).toBe('boolean');
  });
});
