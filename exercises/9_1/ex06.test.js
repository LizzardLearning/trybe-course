const toObject = require('./ex06');

const palio = ["Palio", "Fiat", 2019];
const shelbyCobra = ["Shelby Cobra", "Ford", 1963];
const chiron = ["Chiron", "Bugatti", 2016];

test('Creating Objects', () => {
  expect(toObject(palio)).toEqual({ name: "Palio", brand: "Fiat", year: 2019 });
  expect(toObject(shelbyCobra)).toEqual({ name: "Shelby Cobra", brand: "Ford", year: 1963 });
  expect(toObject(chiron)).toEqual({ name: "Chiron", brand: "Bugatti", year: 2016 });
});
