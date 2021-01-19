// looks like a hash table question

export function twoNumberSum(array: number[], targetSum: number) {
  // Write your code here
  for (let i = 0; i < array.length - 1; i++) {
    const firstElement = array[i]
    for (let j = i + 1; j < array.length; j++) {
      const secondElement = array[j]
      const sum = firstElement + secondElement
      if (sum === targetSum) {
        console.log('found sum')
        return [firstElement, secondElement]
      }
    }
  }
  console.log('returned outside the loop')
  return []
}

interface HashTable<T> {
  [key: number]: T
}

const array1 = [3, 5, -4, 8, 11, 1, -1, 6]
const target = 10

twoNumberSum(array1, target)
