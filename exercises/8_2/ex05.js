const assert = require('assert');
const {books} = require('./books.js');

const expected_result = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin'
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991
};

function longestNamedBook() {
  return books.reduce((larger, book) => {
    return book.name.length > larger.name.length ? book : larger;
  });
}

assert.deepEqual(longestNamedBook(), expected_result);