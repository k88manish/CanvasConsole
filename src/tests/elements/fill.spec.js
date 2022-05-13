import Fill from '../../main/elements/fill.js';

test('empty test placeholder', () => {
  expect(true).toBeTruthy();
});

test('Should paint using the specified color', () => {
  const width = 4;
  const height = 5;
  const pixels = [
    ['-', '|', '|', '-'],
    ['-', ' ', ' ', '-'],
    ['-', ' ', ' ', '-'],
    ['-', ' ', ' ', '-'],
    ['-', '|', '|', '-'],
  ];
  const expected = [
    ['-', '|', '|', '-'],
    ['-', '.', '.', '-'],
    ['-', '.', '.', '-'],
    ['-', '.', '.', '-'],
    ['-', '|', '|', '-'],
  ];
  const x = 1;
  const y = 1;
  const color = '.';
  const fill = new Fill(x, y, color);
  const actual = fill.paint(pixels, width, height);
  expect(actual).toEqual(expected);
});
