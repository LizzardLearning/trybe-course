const random = require('./random');

test('Testando random()', () => {
  /* Exercise 01 */
  random.randomNumber = jest.fn().mockReturnValue(10);

  random.randomNumber();

  expect(random.randomNumber).toHaveBeenCalledTimes(1);
  expect(random.randomNumber()).toBe(10);

  /* Exercise 02 */
  random.randomNumber.mockReset();
  random.randomNumber = jest.fn().mockImplementation((a, b) => (a / b));

  random.randomNumber();

  expect(random.randomNumber).toHaveBeenCalledTimes(1);
  expect(random.randomNumber(10, 5)).toBe(2);

  /* Exercise 03 */
  random.randomNumber.mockReset();
  random.randomNumber = jest.fn().mockImplementation((a, b, c) => (a * b * c));

  random.randomNumber();

  expect(random.randomNumber).toHaveBeenCalledTimes(1);
  expect(random.randomNumber(2, 3, 5)).toBe(30);

  random.randomNumber.mockReset();
  random.randomNumber = jest.fn().mockImplementation((a) => (a * 2));

  random.randomNumber();

  expect(random.randomNumber).toHaveBeenCalledTimes(1);
  expect(random.randomNumber(15)).toBe(30);

});