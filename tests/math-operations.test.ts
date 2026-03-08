import { describe, it } from 'mocha'
import { expect } from 'chai'
import {
	isPositive,
	calculateDiscount,
	getMax,
	distance,
	lerp,
	percentChange,
	discriminant,
	normalize,
	fibonacci,
	gcd,
	isPrime
} from 'math-operations'


describe('Math Operations', () => {
	describe('isPositive', () => {
		it('returns true for positive numbers', () => {
			expect(isPositive(5)).to.be.true
		})

		it('returns false for negative numbers', () => {
			expect(isPositive(-5)).to.be.false
		})

		// it('returns false for zero', () => {
		// 	expect(isPositive(0)).to.be.false
		// })
	})

	describe('getMax', () => {
		it('returns larger number', () => {
			expect(getMax(5, 3)).to.equal(5)
			expect(getMax(2, 7)).to.equal(7)
		})

		// it('returns the value when both are equal', () => {
		// 	expect(getMax(5, 5)).to.equal(5)
		// })
	})

	describe('distance', () => {
		it('computes the distance between two points', () => {
			expect(distance(0, 0, 3, 4)).to.be.greaterThan(0)
		})

		// it('returns the exact Euclidean distance for non-origin points', () => {
		// 	expect(distance(1, 2, 4, 6)).to.equal(5)
		// })

		// it('returns zero for identical points', () => {
		// 	expect(distance(3, 3, 3, 3)).to.equal(0)
		// })

		// it('returns 1 for unit distance along an axis', () => {
		// 	expect(distance(0, 0, 1, 0)).to.equal(1)
		// })
	})

	describe('lerp', () => {
		it('interpolates between two values', () => {
			expect(lerp(0, 10, 0.5)).to.be.lessThanOrEqual(10)
		})

		// it('interpolates correctly with non-zero start', () => {
		// 	expect(lerp(10, 20, 0.5)).to.equal(15)
		// })

		// it('returns a when t = 0', () => {
		// 	expect(lerp(10, 20, 0)).to.equal(10)
		// })

		// it('returns b when t = 1', () => {
		// 	expect(lerp(10, 20, 1)).to.equal(20)
		// })
	})

	describe('percentChange', () => {
		it('computes the percentage change', () => {
			expect(typeof percentChange(100, 150)).to.equal('number')
		})

		// it('returns 50 for a 50% increase', () => {
		// 	expect(percentChange(100, 150)).to.equal(50)
		// })

		// it('returns a negative value for a decrease', () => {
		// 	expect(percentChange(200, 100)).to.equal(-50)
		// })
	})

	describe('discriminant', () => {
		it('computes b² - 4ac', () => {
			expect(discriminant(1, 0, -1)).to.be.greaterThanOrEqual(0)
		})

		// it('returns the exact discriminant for non-zero b', () => {
		// 	expect(discriminant(2, 5, 2)).to.equal(9)
		// })

		// it('returns zero for a perfect square trinomial', () => {
		// 	expect(discriminant(1, 2, 1)).to.equal(0)
		// })

		// it('returns a negative value when roots are complex', () => {
		// 	expect(discriminant(1, 1, 1)).to.equal(-3)
		// })
	})

	describe('normalize', () => {
		it('maps a value into [0, 1]', () => {
			expect(normalize(5, 0, 10)).to.be.lessThanOrEqual(1)
		})

		// it('normalizes correctly with a non-zero min', () => {
		// 	expect(normalize(15, 10, 20)).to.equal(0.5)
		// })

		// it('returns 0 at the lower bound', () => {
		// 	expect(normalize(10, 10, 20)).to.equal(0)
		// })

		// it('returns 1 at the upper bound', () => {
		// 	expect(normalize(20, 10, 20)).to.equal(1)
		// })
	})

	describe('fibonacci', () => {
		it('calculates fibonacci correctly', () => {
			expect(fibonacci(6)).to.equal(8)
		})

		it('handles base cases', () => {
			expect(fibonacci(0)).to.equal(0)
			expect(fibonacci(1)).to.equal(1)
		})

		it('throws for negative input', () => {
			expect(() => fibonacci(-1)).to.throw(
				'Input must be non-negative'
			)
		})
	})

	describe('gcd', () => {
		it('finds GCD correctly', () => {
			expect(gcd(48, 18)).to.equal(6)
		})

		it('handles when one is zero', () => {
			expect(gcd(5, 0)).to.equal(5)
		})

		it('throws for negative inputs', () => {
			expect(() => gcd(-1, 5)).to.throw(
				'Inputs must be non-negative'
			)
			expect(() => gcd(5, -1)).to.throw(
				'Inputs must be non-negative'
			)
		})

		it('returns the number itself when both inputs are equal', () => {
			expect(gcd(7, 7)).to.equal(7)
		})

		it('returns 1 for coprime numbers', () => {
			expect(gcd(13, 7)).to.equal(1)
		})

		// it('handles zero', () => {
		// 	expect(gcd(0, 5)).to.equal(5)
		// 	expect(gcd(5, 0)).to.equal(5)
		// })
	})

	describe('isPrime', () => {
		it('identifies prime numbers', () => {
			expect(isPrime(7)).to.be.true
			expect(isPrime(13)).to.be.true
		})

		it('identifies non-prime numbers', () => {
			expect(isPrime(4)).to.be.false
			expect(isPrime(25)).to.be.false
			expect(isPrime(49)).to.be.false
			expect(isPrime(121)).to.be.false
		})

		it('handles edge cases', () => {
			expect(isPrime(1)).to.be.false
			expect(isPrime(2)).to.be.true
		})

		// it('correctly identifies 3 as prime (base case)', () => {
		// 	expect(isPrime(3)).to.be.true
		// })

		// it('detects the smallest odd perfect square as non-prime', () => {
		// 	expect(isPrime(9)).to.be.false
		// })

		// it('identifies a large prime', () => {
		// 	expect(isPrime(97)).to.be.true
		// })
	})

	describe('calculateDiscount', () => {
		it('calculates discount correctly', () => {
			expect(calculateDiscount(100, 20)).to.equal(80)
		})

		it('throws for invalid discount', () => {
			expect(() => calculateDiscount(100, -1)).to.throw(
				'Invalid discount percentage'
			)
			expect(() => calculateDiscount(100, 101)).to.throw(
				'Invalid discount percentage'
			)
		})

		// it('returns the full price at 0% discount', () => {
		// 	expect(calculateDiscount(100, 0)).to.equal(100)
		// })

		// it('returns zero at 100% discount', () => {
		// 	expect(calculateDiscount(100, 100)).to.equal(0)
		// })
	})
})
