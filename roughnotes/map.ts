const numbers = [1, -1, 2, 3, 4, 5, 6];

const items = numbers
  .filter((n) => n > 1)
  .map((element) => `<li>${element}</li>`);

console.log(items);
