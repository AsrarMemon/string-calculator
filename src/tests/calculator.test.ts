import { add } from '@/lib/calculator';

describe('String Calculator', () => {
  test('empty string returns 0', () => {
    expect(add('')).toBe(0);
  });
  
   test('single number returns itself', () => {
    expect(add('5')).toBe(5);
  });

  test('two numbers comma-separated returns sum', () => {
    expect(add('1,2')).toBe(3);
  });
  
});