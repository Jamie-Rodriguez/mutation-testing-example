export function removeDuplicates(arr: number[]): number[] {
  const result: number[] = []

  for (const item of arr)
    if (!result.includes(item))
      result.push(item)

  return result
}

export function sumArray(arr: number[]): number {
  let sum = 0

  for (const num of arr)
    sum += num

  return sum
}

export function averageArray(arr: number[]): number {
  const sum = sumArray(arr)

  return sum / arr.length
}

export function findIndex(arr: any[], target: any): number {
  for (let i = 0; i < arr.length; i++)
    if (arr[i] === target)
      return i

  return -1
}

export function arraysEqual(arr1: any[], arr2: any[]): boolean {
    if (arr1.length !== arr2.length)
        return false

    for (let i = 0; i < arr1.length; i++)
        if (arr1[i] !== arr2[i])
            return false

    return true
}
