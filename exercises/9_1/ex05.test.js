const swap = require("./ex05")

const myList = [1, 2, 3];

test('Test Swap', () => {
  expect(swap(myList)).toEqual([3,2,1]);
});