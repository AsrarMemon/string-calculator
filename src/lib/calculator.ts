export function add(numbers: string): number {
  if (!numbers) return 0;
  
  let delimiter = /,|\n/;

   if (numbers.startsWith('//')) {
    const parts = numbers.split('\n');
    delimiter = new RegExp(parts[0].substring(2));
    numbers = parts[1];
  }

  const nums = numbers.split(delimiter).map(Number);
  const ngt = nums.filter(n => n < 0);

  if (ngt.length) {
    throw new Error(`Negative numbers not allowed: ${ngt.join(',')}`);
  }


  return nums.reduce((sum, n) => sum + n, 0);
}