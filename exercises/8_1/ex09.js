const assert = require('assert');
const {books} = require('./books');

const expected_result = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  return books.find(book => {
    return (book.author.name.split('.').length === 4);
  }).name;
}

assert.deepEqual(authorWith3DotsOnName(), expected_result);