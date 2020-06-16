const assert = require('assert');
const {books} = require('./books');

function authorBornIn1947() {
  return books.find(book => {
    return book.author.birthYear === 1947;
  }).author.name;
}

assert.equal(authorBornIn1947(), 'Stephen King')