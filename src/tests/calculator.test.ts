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

  test('handle new lines between numbers', () => {
    expect(add('1\n2,3')).toBe(6);
  });

  test('custom delimiter', () => {
    expect(add('//;\n1;2')).toBe(3);
  });

  test('negative numbers throw exception', () => {
    expect(() => add('1,-2,3,-4')).toThrow('Negative numbers not allowed: -2,-4');
  });

});