const sum = (...numbers) => numbers.length ? numbers.reduce((total, num) => total + num) : 0;

module.exports = sum;