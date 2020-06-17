const assert = require('assert');
const {books} = require('./books');

function smallerName() {
  let nameBook;
  books.forEach((book, i) => {
    const {length} = book.name;
    if(i === 0) nameBook = book.name;
    else if(length < nameBook.length) nameBook = book.name;
  });
  return nameBook;
}

assert.equal(smallerName(), 'Duna');