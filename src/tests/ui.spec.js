import ConsoleInterface from '../main/consoleInterface.js';
import Canvas from '../main/elements/canvas.js';
import Line from '../main/elements/line.js';

let consoleInterface;
let mockInterface;

beforeEach(() => {
  mockInterface = {
    write: jest.fn().mockImplementation(() => 42),
  };
  consoleInterface = new ConsoleInterface(mockInterface);
});

test('addElem should add a Canvas when the element is a canvas', () => {
  const canvas = new Canvas(1, 1);
  consoleInterface = consoleInterface.addElement(canvas);
  expect(consoleInterface.canvas).toBe(canvas);
});

test('addElem should add a shape to the stack of shapes when the element is a shape', () => {
  const canvas = new Canvas(5, 5);
  const shape = new Line(1, 1, 2, 1);
  consoleInterface = consoleInterface.addElement(canvas).addElement(shape);
  expect(consoleInterface.shapes[0]).toBe(shape);
});

test('render should write each point of the canvas to the interface. A (3x3) canvas should render 30 points (and 5 line returns).', () => {
  const canvas = new Canvas(3, 3);
  consoleInterface = consoleInterface.addElement(canvas);
  consoleInterface.render();
  expect(mockInterface.write).toBeCalledTimes(canvas.heigth * canvas.width + 5);
});

test('render should stack shapes on top of each other with the last added on top', () => {
  const canvas = new Canvas(3, 3);
  const shape = new Line(1, 1, 2, 1);
  console.log('test start');
  consoleInterface.addElement(canvas).addElement(shape).render();
  expect(mockInterface.write).toBeCalledTimes(30);
});

test('addElement should throw if element is outside of canvas', () => {
  const canvas = new Canvas(3, 3);
  consoleInterface = consoleInterface.addElement(canvas);
  const shape = new Line(2, 2, 4, 2);
  expect(() => consoleInterface.addElement(shape)).toThrow();
});
