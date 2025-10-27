export function isPositive(n: number): boolean {
  return n > 0
}

export function calculateDiscount(price: number, discountPercent: number): number {
  if (discountPercent < 0 || discountPercent > 100)
    throw new Error('Invalid discount percentage')

  return price * (1 - discountPercent / 100)
}

export function findMax(a: number, b: number): number {
  if (a > b)
    return a

  return b
}

export function fibonacci(n: number): number {
  if (n < 0)
    throw new Error('Input must be non-negative')

  if (n <= 1)
    return n

  let prev = 0
  let current = 1

  for (let i = 2; i <= n; i++) {
    const temp = current
    current = prev + current
    prev = temp
  }

  return current
}

export function gcd(a: number, b: number): number {
  if (a < 0 || b < 0)
    throw new Error('Inputs must be non-negative')

  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }

  return a
}

export function isPrime(n: number): boolean {
  if (n <= 1)
    return false

  if (n <= 3)
    return true

  if (n % 2 === 0 || n % 3 === 0)
    return false

  for (let i = 5; i * i <= n; i += 6)
    if (n % i === 0 || n % (i + 2) === 0)
      return false

  return true
}
