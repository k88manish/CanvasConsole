/* eslint-disable no-new */
import Canvas from '../../main/elements/canvas.js';

test('Canvas should draw using - (dash char) for the top and bottom edges, and | (pipe char) for left and right edges, the rest should be an empty string ', () => {
  const width = 10;
  const heigth = 10;
  const canvas = new Canvas(width, heigth);

  for (let y = 0; y < canvas.heigth; y += 1) {
    for (let x = 0; x < canvas.width; x += 1) {
      const pixel = canvas.renderAt(x, y);
      if (y === 0 || y === canvas.heigth - 1) {
        expect(pixel).toBe('-');
      } else if (x === 0 || x === canvas.width - 1) {
        expect(pixel).toBe('|');
      } else expect(pixel).toBe(' ');
    }
  }
});

test('Canvas sets the width and heigth based on a +2 criteria ', () => {
  const width = 10;
  const heigth = 10;
  const canvas = new Canvas(width, heigth);

  expect(canvas.width).toBe(width + 2);
  expect(canvas.heigth).toBe(heigth + 2);
});

test('Canvas should throw error if x < 0', () => {
  expect(() => new Canvas(-1, 1)).toThrow();
});

test('Canvas should throw error if y < 0', () => {
  expect(() => new Canvas(1, -1)).toThrow();
});

test('Canvas should throw error if x is NaN', () => {
  expect(() => new Canvas('s', 1)).toThrow();
});

test('Canvas should throw error if y is NaN', () => {
  expect(() => new Canvas(1, 's')).toThrow();
});

test('Canvas should throw error if x > 100', () => {
  expect(() => new Canvas(101, 1)).toThrow();
});

test('Canvas should throw error if y > 100', () => {
  expect(() => new Canvas(1, 101)).toThrow();
});
