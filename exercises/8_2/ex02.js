const assert = require('assert');
const {books} = require('./books.js');


function allNames() {
  return `Nomes: ${books.map(book => book.author.name)
  .join(', ')}.`;
}

assert.deepEqual(allNames(), "Nomes: George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.");