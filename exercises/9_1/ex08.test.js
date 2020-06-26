const greet = require('./ex08');

test('Say hello', () => {
  expect(greet("John")).toBe("Hi John");
  expect(greet("John", "Good morning")).toBe("Good morning John");
  expect(greet("Isabela", "Oi")).toBe("Oi Isabela");
});
