function sumFirstElement(array: number[]) {
  // O(1)
  const val = 1 + array[0];
  return val;
}

function sum(array: number[]) {
  // O(n)
  let val = 0;
  for (let index = 0; index < array.length; index++) {
    val += array[index];
  }
  return val;
}

function pair(array: number[]) {
  // O(n^2)
  for (let i = 0; i < array.length; i++) {
    const element1 = array[i];
    for (let j = 0; j < array.length; j++) {
      const element2 = array[j];
      const pair = [element1, element2];
      console.log(pair);
    }
  }
  return 1;
}

const testArray = [1, 2, 3, 4, 5];
// sumFirstElement(testArray)
// sum(testArray)
// pair(testArray)
