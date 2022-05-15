import FillCommand from '../../main/commands/fillCommand.js';

test('Command [B x y c] should create a fill with (x,y) and color (c)', () => {
  const fill = new FillCommand(['0', '5', 'p']).execute();
  expect(fill.x).toBe(0);
  expect(fill.y).toBe(5);
  expect(fill.color).toBe('p');
});
