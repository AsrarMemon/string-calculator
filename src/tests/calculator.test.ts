import { add } from '@/lib/calculator';

describe('String Calculator', () => {
  test('empty string returns 0', () => {
    expect(add('')).toBe(0);
  });
});