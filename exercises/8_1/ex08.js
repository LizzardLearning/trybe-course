const assert = require('assert');
const {books} = require('./books');

const expected_result = [
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954
  }
]

function oldBooks() {
  const currentYear = new Date().getFullYear();
  const book = books.filter(b => {
    return currentYear - b.releaseYear > 60;
  });
  return book.sort((a, b) => {
    return a.releaseYear - b.releaseYear;
  });
}

assert.deepEqual(oldBooks(), expected_result);