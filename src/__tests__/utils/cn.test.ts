import { cn } from '@/utils/cn';

describe('cn utility', () => {
  it('should merge class names', () => {
    expect(cn('a', 'b')).toBe('a b');
  });

  it('should handle conditional classes', () => {
    expect(cn('a', false && 'b', 'c')).toBe('a c');
  });

  it('should handle arrays and objects', () => {
    expect(cn(['a', 'b'], { c: true, d: false })).toBe('a b c');
  });

  it('should merge tailwind classes', () => {
    expect(cn('px-2 py-2', 'px-4')).toBe('py-2 px-4');
  });
});
