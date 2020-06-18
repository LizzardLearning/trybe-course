const assert = require('assert');
const {books} = require('./books.js');

const expected_result = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft'
];

function formatedBookNames() {
  return books.map(book => `${book.name} - ${book.genre} - ${book.author.name}`)
}

assert.deepEqual(formatedBookNames(), expected_result);