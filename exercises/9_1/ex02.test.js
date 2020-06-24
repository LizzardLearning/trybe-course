const sum = require('./ex02');

test('Soma de números', () => {
  const values = [
    [],
    [1],
    [1,2],
    [1,2,3],
    [1,2,3,4]
  ];

  const expected = [0, 1, 3, 6, 10];

  values.forEach((el, i)=> {
    expect(sum(...el)).toBe(expected[i]);
  });
  
});