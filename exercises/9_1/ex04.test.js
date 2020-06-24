const filterPeople = require('./ex04');

const people = [
  {
      name: "Nicole",
      bornIn: 1992,
      nationality: "Australian"
  },
  {
      name: "Harry",
      bornIn: 2008,
      nationality: "Australian"
  },
  {
      name: "Toby",
      bornIn: 1901,
      nationality: "Australian"
  },
  {
      name: "Frida",
      bornIn: 1960,
      nationality: "Dannish"
  },
  {
      name: "Fernando",
      bornIn: 2001,
      nationality: "Brazilian"
  }
];

const filteredPeople = filterPeople(people);

test('Filtrando pessoas', () => {
  expect(filteredPeople[0]).toEqual({ name: "Nicole", bornIn: 1992, nationality: "Australian" });
  expect(filteredPeople[1]).toEqual({ name: "Toby", bornIn: 1901, nationality: "Australian" });
});