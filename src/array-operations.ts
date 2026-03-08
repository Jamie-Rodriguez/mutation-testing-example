// Returns true if both arrays have the same length and elements in the same order.
export function arraysEqual<T>(arr1: T[], arr2: T[]): boolean {
	if (arr1.length !== arr2.length)
		return false

	for (let i = 0; i < arr1.length; i++)
		if (arr1[i] !== arr2[i])
			return false

	return true
}

/**
 * Chunks an array into groups of the given size.
 * The last chunk may be smaller.
 */
export function chunk<T>(arr: T[], size: number): T[][] {
	if (size <= 0)
		throw new Error('Chunk size must be positive')

	const result: T[][] = []

	for (let i = 0; i < arr.length; i += size)
		result.push(arr.slice(i, i + size))

	return result
}
