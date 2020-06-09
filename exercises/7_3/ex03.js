const assert = require('assert');

function mySum(arr) {
  let result = 0;
  for (let item in arr) {
    result += arr[item];
  }
  return result;
}

assert.deepEqual(mySum([1, 2, 3, 4]), 10);

assert.deepEqual(
  mySum([1, -2, -3, 4]),//Função
  [1, -2, -3, 4].reduce((total, atual) => total+atual)//resultado esperado
);