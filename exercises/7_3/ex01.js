const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

assert.deepEqual(sum(4, 5), 9);
assert.deepEqual(sum(0,0), 0);
assert.ok(sum(4, "5"))