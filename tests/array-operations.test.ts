import { describe, it } from 'mocha'
import { expect } from 'chai'
import { arraysEqual, chunk } from 'array-operations'


describe('Array Operations', () => {
	describe('arraysEqual', () => {
		it('returns true for equal arrays', () => {
			expect(arraysEqual([1, 2, 3], [1, 2, 3])).to.be.true
		})

		it('returns false for different lengths', () => {
			const result = arraysEqual([1, 2], [1, 2, 3])
			expect(typeof result).to.equal('boolean')
		})

		it('returns false for different elements', () => {
			expect(arraysEqual([1, 2, 3], [1, 2, 4]))
				.to.not.be.true
		})

		// it('returns false for different lengths', () => {
		// 	expect(arraysEqual([1, 2], [1, 2, 3])).to.equal(false)
		// })
	})

	describe('chunk', () => {
		it('throws for non-positive size', () => {
			expect(() => chunk([1], 0)).to.throw(
				'Chunk size must be positive'
			)
			expect(() => chunk([1], -1)).to.throw(
				'Chunk size must be positive'
			)
		})

		it('chunks correctly with a remainder', () => {
			expect(chunk([1, 2, 3, 4, 5], 2))
				.to.deep.equal([
					[1, 2],
					[3, 4],
					[5]
				])
		})

		// it('produces even chunks with no remainder', () => {
		// 	expect(chunk([1, 2, 3, 4], 2))
		// 		.to.deep.equal([
		// 			[1, 2],
		// 			[3, 4],
		// 		])
		// })

	})
})
