export function add(numbers: string): number {
  if (!numbers) return 0;
  
  let delimiter = /,|\n/;

  const nums = numbers.split(delimiter).map(Number);

  return nums.reduce((sum, n) => sum + n, 0);
}