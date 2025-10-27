import { describe, it } from 'mocha'
import { expect } from 'chai'
import { isPositive, calculateDiscount, findMax, fibonacci, gcd, isPrime } from 'math-operations'

describe('Math Operations', () => {
  describe('isPositive', () => {
    it('returns true for positive numbers', () => {
      expect(isPositive(5)).to.be.true
    })

    it('returns false for negative numbers', () => {
      expect(isPositive(-5)).to.be.false
    })

    // Missing: test for 0 - mutation n > 0 to n >= 0 would pass!
  })

  describe('calculateDiscount', () => {
    it('calculates discount correctly', () => {
      expect(calculateDiscount(100, 20)).to.equal(80)
    })

    it('throws for invalid discount', () => {
      expect(() => calculateDiscount(100, -1)).to.throw()
      expect(() => calculateDiscount(100, 101)).to.throw()
    })

    // Missing: boundary tests at 0% and 100% discount
    // Mutation discountPercent > 100 to discountPercent >= 100 would pass!
  })

  describe('findMax', () => {
    it('returns larger number', () => {
      expect(findMax(5, 3)).to.equal(5)
      expect(findMax(2, 7)).to.equal(7)
    })

    // Missing: test for equal values - mutation could return wrong value!
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
      expect(() => fibonacci(-1)).to.throw()
    })

    // Missing: fibonacci(2) - boundary for loop start
    // Mutation i <= n to i < n would miss last iteration
    // Mutation n <= 1 to n < 1 would return wrong value for n=1
  })

  describe('gcd', () => {
    it('finds GCD correctly', () => {
      expect(gcd(48, 18)).to.equal(6)
    })

    it('handles when one is zero', () => {
      expect(gcd(5, 0)).to.equal(5)
    })

    it('throws for negative inputs', () => {
      expect(() => gcd(-1, 5)).to.throw()
      expect(() => gcd(5, -1)).to.throw()
    })

    // Missing: equal numbers test, prime numbers test
    // Missing: a < 0 || b < 0 mutation to a <= 0 || b <= 0 would incorrectly reject zero
    // Mutation b !== 0 to b > 0 would fail for initial positive b
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

    // Missing: isPrime(3) - boundary case
    // Missing: large prime number test
    // Mutation n <= 1 to n < 1 would incorrectly classify 1
    // Mutation n <= 3 to n < 3 would incorrectly classify 3
    // Mutation i * i <= n to i * i < n would miss perfect square check
  })
})
