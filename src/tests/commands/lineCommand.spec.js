import LineCommand from '../../main/commands/lineCommand.js';

test('Command [L x1 y1 x2 y2] should create a line with start at (x1,y1) and end at (x2,y2)', () => {
  const line = new LineCommand('L 0 1 0 3').execute();
  expect(line.x1).toBe(0);
  expect(line.y1).toBe(1);
  expect(line.x2).toBe(0);
  expect(line.y2).toBe(3);
});

test('Command [L w h] should throw when line is invalid', () => {
  expect(() => new LineCommand('L 1 1 2 2')).toThrow();
});
