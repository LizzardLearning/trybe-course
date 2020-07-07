const random = require('./random');

describe('Testando random()', () => {
  random.randomNumber = jest.fn().mockReturnValue(10);
  afterEach(random.randomNumber.mockReset);

  /* Exercise 01 */
  test('Testando retorno 10', () => {
    random.randomNumber();
    expect(random.randomNumber).toHaveBeenCalledTimes(1);
    expect(random.randomNumber()).toBe(10);
  });

  /* Exercise 02 */
  test('Testando retorno (a/b)', () => {
    random.randomNumber = jest.fn().mockImplementation((a, b) => (a / b));
    random.randomNumber();
    expect(random.randomNumber).toHaveBeenCalledTimes(1);
    expect(random.randomNumber(10, 5)).toBe(2);
  });

  /* Exercise 03 */
  test('Testando (a * b * c)', () => {
    random.randomNumber = jest.fn().mockImplementation((a, b, c) => (a * b * c));
    random.randomNumber();
    expect(random.randomNumber).toHaveBeenCalledTimes(1);
    expect(random.randomNumber(2, 3, 5)).toBe(30);
  });

  test('Testando o dobro de a', () => {
    random.randomNumber = jest.fn().mockImplementation((a) => (a * 2));
    random.randomNumber();
    expect(random.randomNumber).toHaveBeenCalledTimes(1);
    expect(random.randomNumber(15, 2)).toBe(30);
  });
  
});
