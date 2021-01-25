import { generateRandomInt } from '../utils';

function squareArrayInPlace(array: number[]): void {
  array.forEach((element, index) => {
    array[index] *= element;
  });
  // no need to return array is modified in place, does not allocate extra elements, destroys original input
}

function squareOutOfPlace(array: number[]): number[] {
  // safer because it avoids side effects
  const squaredArray = [];
  array.forEach((element, index) => {
    squaredArray[index] = Math.pow(element, 2);
  });

  return squaredArray;
}

const array: number[] = new Array(20);

for (let i = 0; i < array.length; i++) {
  array[i] = generateRandomInt(0, 10); // random value from 0 99
}

console.log('The current array structure is like this\n', array);
squareArrayInPlace(array);
console.log('The array has been squared in place as seen here\n', array);

// const tailofArray = array.slice(1) // O(n) space and O(n) time to allocate AND copy n-1 elements to the new tail
// console.log(tailofArray)

// All JS arrays are dynamic, and store an endIndex to specify where the array's contents ends not its size
