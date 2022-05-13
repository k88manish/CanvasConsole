
/**
 *The Canvas of the drawing
 *
 * @export
 * @class Canvas
 */
export default class Canvas {
  /**
   *Creates an instance of Canvas.
   * @param {*} width
   * @param {*} height
   * @memberof Canvas
   */
  constructor(width, height) {
    [width, height].forEach((n) => {
      if (typeof n !== 'number' || Number.isNaN(n) || n < 0 || n > 100) throw new Error('(w,h) must be positive integer (max 100)');
    });
    this.heigth = height + 2;
    this.width = width + 2;
  }

  /**
   *Returns the string at the specified coordinate
   *
   * @param {*} x
   * @param {*} y
   * @returns
   * @memberof Canvas
   */
  renderAt(x, y) {
    if (y === 0 || y === this.heigth - 1) {
      return '-';
    }
    if (x === 0 || x === this.width - 1) {
      return '|';
    }
    return ' ';
  }
}
