const assert = require('assert');

function isAbove(num1, num2) {
  return num1 > num2;
}

assert.deepEqual(isAbove(5, 10), false);
assert.deepEqual(isAbove(21, 5.3), true);