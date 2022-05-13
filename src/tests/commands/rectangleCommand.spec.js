import RectangleCommand from '../../main/commands/rectangleCommand.js';

test('Command [R x1 y1 x2 y2] should create a rectangle with start at (x1,y1) top left, and end at (x2,y2) bottom right', () => {
  const r = new RectangleCommand('R 0 5 6 1').execute();
  expect(r.x1).toBe(0);
  expect(r.y1).toBe(5);
  expect(r.x2).toBe(6);
  expect(r.y2).toBe(1);
});

test('Command [R x1 y1 x2 y2] should throw when rectangle is invalid', () => {
  expect(() => new RectangleCommand('R -1 -1 0 0')).toThrow();
});
