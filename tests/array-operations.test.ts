import { describe, it } from 'mocha'
import { expect } from 'chai'
import { removeDuplicates, sumArray, averageArray, findIndex, arraysEqual } from 'array-operations'

describe('Array Operations', () => {
  describe('removeDuplicates', () => {
    it('removes duplicates', () => {
      expect(removeDuplicates([1, 2, 2, 3])).to.deep.equal([1, 2, 3])
    })

    // Missing: empty array, no duplicates, all duplicates
    // Missing: order preservation test
  })

  describe('sumArray', () => {
    it('sums array elements', () => {
      expect(sumArray([1, 2, 3])).to.equal(6)
    })

    // Missing: empty array, single element, negative numbers
    // Mutation sum += num to sum = num might pass with certain inputs!
  })

  describe('averageArray', () => {
    it('calculates average correctly', () => {
        expect(averageArray([2, 4, 6])).to.equal(4)
    })
  })

  describe('findIndex', () => {
    it('finds element index', () => {
      expect(findIndex([1, 2, 3], 2)).to.equal(1)
    })

    it('returns -1 when not found', () => {
      expect(findIndex([1, 2, 3], 4)).to.equal(-1)
    })

    // Missing: type coercion test (=== vs ==)
    // Missing: first element, last element tests
  })

  describe('arraysEqual', () => {
    it('returns true for equal arrays', () => {
        expect(arraysEqual([1, 2, 3], [1, 2, 3])).to.be.true
    })

    it('returns false for different arrays', () => {
        expect(arraysEqual([1, 2], [1, 2, 3])).to.be.false
    })

    it('returns false for different values', () => {
        expect(arraysEqual([1, 2], [1, 3])).to.be.false
    })
  })
})
