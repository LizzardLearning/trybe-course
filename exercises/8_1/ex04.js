const assert = require('assert');
const {books} = require('./books');

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

function getNamedBook() {
  return books.find(book => {
    return book.name.length === 26;
  });
}

assert.deepEqual(getNamedBook(), expected_result);