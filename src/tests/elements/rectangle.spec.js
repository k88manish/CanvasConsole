import Rectangle from '../../main/elements/rectangle.js';

test('Rectangle should be drawn with an X on its perimeter', () => {
  const x1 = 1;
  const y1 = 1;
  const x2 = 8;
  const y2 = 1;
  const line = new Rectangle(x1, y1, x2, y2);
  for (let y = y1; y <= y2; y += 1) {
    for (let x = x1; x <= x2; x += 1) {
      expect(line.renderAt(x, y)).toBe('X');
    }
  }
});

test('Rectangle should not draw outside of its coords', () => {
  const x1 = 5;
  const y1 = 5;
  const x2 = 10;
  const y2 = 10;
  const line = new Rectangle(x1, y1, x2, y2);
  for (let y = 0; y < y1; y += 1) {
    for (let x = 0; x <= x1; x += 1) {
      expect(line.renderAt(x, y)).toBe(null);
    }
  }
});
