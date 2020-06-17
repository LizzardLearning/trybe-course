const assert = require('assert');
const {books} = require('./books.js');

const expected_result = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien'
]

function fantasyOrScienceFictionAuthors() {
  return books.filter((book) => 
    (book.genre === 'Fantasia' || book.genre === 'Ficção Científica')
  ).map(book => book.author.name);
}

assert.deepEqual(fantasyOrScienceFictionAuthors(), expected_result);
