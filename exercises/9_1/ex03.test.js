const personLikes = require('./ex03');

const alex = {
  name: "Alex",
  age: 26,
  likes: ["fly fishing"],
  nationality: "Australian"
}

const gunnar = {
  name: "Gunnar",
  age: 30,
  likes: ["hiking", "scuba diving", "taking pictures"],
  nationality: "Icelandic"
}

test('Pessoas gostam', () => {
  expect(personLikes(alex)).toBe("Alex is 26 years old and likes fly fishing.");
  expect(personLikes(gunnar)).toBe("Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.");
});