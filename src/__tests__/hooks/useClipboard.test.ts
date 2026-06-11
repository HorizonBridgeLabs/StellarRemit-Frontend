import { renderHook, act, waitFor } from '@testing-library/react';
import { useClipboard } from '@/hooks/useClipboard';

describe('useClipboard', () => {
  const mockWriteText = jest.fn();
  const originalClipboard = Object.getOwnPropertyDescriptor(window, 'navigator');

  beforeEach(() => {
    Object.defineProperty(window, 'navigator', {
      writable: true,
      value: {
        clipboard: {
          writeText: mockWriteText,
        },
      },
    });
    mockWriteText.mockResolvedValue(undefined);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should copy text and set copied to true', async () => {
    const { result } = renderHook(() => useClipboard(100));
    expect(result.current.copied).toBe(false);

    await act(async () => {
      await result.current.copy('test text');
    });

    expect(mockWriteText).toHaveBeenCalledWith('test text');
    expect(result.current.copied).toBe(true);
  });

  it('should reset copied state', async () => {
    const { result } = renderHook(() => useClipboard(100));
    await act(async () => {
      await result.current.copy('test');
    });
    expect(result.current.copied).toBe(true);

    act(() => {
      result.current.reset();
    });
    expect(result.current.copied).toBe(false);
  });

  it('should handle clipboard errors', async () => {
    mockWriteText.mockRejectedValue(new Error('Clipboard failed'));
    const { result } = renderHook(() => useClipboard());

    await act(async () => {
      await result.current.copy('test');
    });

    expect(result.current.copied).toBe(false);
  });
});
