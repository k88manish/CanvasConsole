import Line from '../../main/elements/line.js';

test("Horizontal Line should be drawn with an 'X'", () => {
  const x1 = 1;
  const y1 = 1;
  const x2 = 8;
  const y2 = 1;
  const line = new Line(x1, y1, x2, y2);
  for (let x = x1; x <= x2; x += 1) {
    for (let y = y1; y <= y2; y += 1) {
      expect(line.renderAt(x, y)).toBe('X');
    }
  }
});

test('Line should throw error if x < 0', () => {
  expect(() => new Line(-1, 1, -1, 1)).toThrow();
});

test('Line should throw error if y < 0', () => {
  expect(() => new Line(1, -1, 1, -1)).toThrow();
});

test('Line should throw error if x is NaN', () => {
  expect(() => new Line('s', 1, '2', 1)).toThrow();
});

test('Line should throw error if y is NaN', () => {
  expect(() => new Line(1, 's', 1, '1')).toThrow();
});

test('Line should throw error if x > 100', () => {
  expect(() => new Line(101, 1, 101, 1)).toThrow();
});

test('Line should throw error if y > 100', () => {
  expect(() => new Line(1, 101, 1, 101)).toThrow();
});

test('Line should throw error if line is not horizontal and not vertical', () => {
  expect(() => new Line(1, 1, 10, 10)).toThrow();
});
