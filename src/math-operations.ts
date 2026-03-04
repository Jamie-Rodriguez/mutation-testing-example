export function isPositive(n: number): boolean {
	return n > 0
}

export function getMax(a: number, b: number): number {
	return a > b ? a : b
}

// Euclidean distance between two 2D points
export function distance(
	x1: number, y1: number,
	x2: number, y2: number
): number {
	return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
}

// Linear interpolation: returns the value t% of the way from a to b
export function lerp(from: number, to: number, percentage: number): number {
	return from + (to - from) * percentage
}

// Percentage change from `oldVal` to `newVal`
export function percentChange(oldVal: number, newVal: number): number {
	return ((newVal - oldVal) / oldVal) * 100
}

// Quadratic discriminant: b² − 4ac
export function discriminant(a: number, b: number, c: number): number {
	return b * b - 4 * a * c
}

// Normalize a value from [min, max] into [0, 1]
export function normalize(value: number, min: number, max: number): number {
	return (value - min) / (max - min)
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

// Euclidean algorithm (division-based)
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

/**
 * Optimized trial division
 *
 * Exploits the fact that every prime greater than 3 is of the form 6k - 1 or
 * 6k + 1, so instead of checking every integer up to √n, it steps by 6 and
 * only tests i and i + 2.
 * This skips all multiples of 2 and 3 automatically, cutting the number of
 * trial divisions to roughly a third.
 */
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

export function calculateDiscount(price: number, discountPercent: number): number {
	if (discountPercent < 0 || discountPercent > 100)
		throw new Error('Invalid discount percentage')

	return price * (1 - discountPercent / 100)
}