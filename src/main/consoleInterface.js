import Canvas from './elements/canvas.js';
import Fill from './elements/fill.js';

/**
 *Represents the interface on which to draw shapes
 *
 * @export
 * @class ConsoleInterface
 */
export default class ConsoleInterface {
  /**
   *Creates an instance of ConsoleInterface. Depends on an IO interface.
   * @param {*} intf
   * @memberof ConsoleInterface
   */
  constructor(intf) {
    this.rl = intf;
    this.shapes = [];
    this.pixels = [];
  }

  /**
   *Adds an element to the interface.
   *
   * @param {*} elem
   * @returns
   * @memberof Uis
   */
  addElement(elem) {
    this.guardElemOutsideOfCanvas(elem);
    const consoleInterface = Object.assign(new ConsoleInterface(), this);
    if (elem instanceof Canvas) {
      consoleInterface.canvas = elem;
      consoleInterface.shapes = [];
      consoleInterface.pixels = [];
    } else if (elem instanceof Fill) {
      consoleInterface.pixels = elem.paint(consoleInterface.pixels);
    } else if (elem.renderAt) {
      consoleInterface.shapes.push(elem);
    }
    return consoleInterface;
  }

  /**
   *Checks if the element is outside of the canvas
   *
   * @param {*} elem
   * @memberof ConsoleInterface
   */
  guardElemOutsideOfCanvas(elem) {
    if (elem == null) throw new Error('invalid shape');
    if (!(elem instanceof Canvas)) {
      if (this.canvas == null) {
        throw new Error('please crete a canvas first');
      }
      if (
        elem.rendersInside
        && !elem.rendersInside(this.canvas.width - 1, this.canvas.heigth - 1)
      ) {
        throw new Error('invalid shape, it is outside of canvas');
      }
    }
  }

  /**
   *Writes the current state of its elements onto the IO interface.
   *
   * @memberof ConsoleInterface
   */
  render() {
    for (let y = 0; y < this.canvas.heigth; y += 1) {
      for (let x = 0; x < this.canvas.width; x += 1) {
        let pixel = x === 0 || y === 0 ? this.canvas.renderAt(x, y) : null;

        const line = this.pixels[x];
        if (!line) this.pixels[x] = [];

        if (!pixel) {
          for (let s = this.shapes.length - 1; s >= 0; s -= 1) {
            const v = this.shapes[s].renderAt(x, y);
            if (v) {
              pixel = v;
              break;
            }
          }
        }

        if (!pixel) {
          pixel = this.pixels[x][y]
            ? this.pixels[x][y]
            : this.canvas.renderAt(x, y);
        }
        this.pixels[x][y] = pixel;
        this.rl.write(pixel);
      }
      this.rl.write('\n');
    }
  }
}
