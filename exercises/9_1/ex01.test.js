const rectangleArea = require('./ex01');

test('Rectangles área', () => {
  const rectangle1 = [1, 2];
  const rectangle2 = [3, 5];
  const rectangle3 = [6, 9];
  const rectangles = [rectangle1, rectangle2, rectangle3];

  for(rectangle of rectangles) {
    // altere a chamada da funcao rectangleArea
    expect(rectangleArea(...rectangle)).toBe(rectangle[0]*rectangle[1]);
  }
});