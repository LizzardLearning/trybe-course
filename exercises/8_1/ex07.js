const assert = require('assert');
const {books} = require('./books');

const expected_result = true

function someBookWasReleaseOnThe80s() {
  return books.some(book => {
    return book.releaseYear >= 1980;
  })
}

assert.equal(someBookWasReleaseOnThe80s(), expected_result);