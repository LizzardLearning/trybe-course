const assert = require('assert');
const {books} = require('./books.js');

const expected_result = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu'
];

function oldBooks() {
  const currentYear = new Date().getFullYear();
  return books.filter(book => (currentYear - book.releaseYear > 60))
  .map(book => book.name);
}

assert.deepEqual(oldBooks(), expected_result);