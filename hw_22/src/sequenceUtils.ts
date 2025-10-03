export function generateFibonacci(n: number): number[] {
  const result: number[] = [0, 1];
  while (true) {
    const next = result[result.length - 1] + result[result.length - 2];
    if (next > n) break;
    result.push(next);
  }
  return result;
}

export function generatePrimeNumbers(n: number): number[] {
  const primes: number[] = [];
  for (let i = 2; i <= n; i++) {
    if (primes.every((p) => i % p !== 0)) {
      primes.push(i);
    }
  }
  return primes;
}
