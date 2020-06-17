const assert = require('assert');
const {books} = require('./books');

const expected_result = false

function everyoneWasBornOnSecXX() {
  return books.every(book => {
    return book.author.birthYear >= 1900;
  });
}

assert.equal(everyoneWasBornOnSecXX(), expected_result);