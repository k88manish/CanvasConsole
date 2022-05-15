import CanvasCommand from '../../main/commands/canvasCommand.js';

test('Command [C w h] should create a canvas of width [w]+2 and height [h]+2', () => {
  const canvas = new CanvasCommand(['4', '5']).execute();
  expect(canvas.width).toBe(6);
  expect(canvas.heigth).toBe(7);
});

test('Command [C w h] should throw when canvas is invalid', () => {
  expect(() => new CanvasCommand(['1', '101'])).toThrow();
});
