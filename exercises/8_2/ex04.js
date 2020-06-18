const assert = require('assert');
const {books} = require('./books.js');

const expected_result = 43;

function averageAge() {
  const {length} = books;
  return books.map(book => book.releaseYear - book.author.birthYear)
  .reduce((total, age) => total + age)
  / length;
}

assert.equal(averageAge(), expected_result);