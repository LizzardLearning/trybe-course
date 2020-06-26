const shipLength = require('./ex07');

const ships = [
    {
        name: "Titanic",
        length: 269.1
    },
    {
        name: "Queen Mary 2",
        length: 1132,
        measurementUnit: "feet"
    },
    {
        name: "Yamato",
        length: 256,
        measurementUnit: "meters"
    }
];

test('Printing - [ship] is [size] [unity] long', () => {
  expect(shipLength(ships[0])).toBe("Titanic is 269.1 meters long");
  expect(shipLength(ships[1])).toBe("Queen Mary 2 is 1132 feet long");
  expect(shipLength(ships[2])).toBe("Yamato is 256 meters long");
});