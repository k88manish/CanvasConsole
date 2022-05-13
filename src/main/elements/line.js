/**
 *A shape that represents a line between two points
 *
 * @export
 * @class Line
 */
export default class Line {
  /**
   *Creates an instance of Line.
   * @param {*} x1
   * @param {*} y1
   * @param {*} x2
   * @param {*} y2
   * @memberof Line
   */
  constructor(x1, y1, x2, y2) {
    [x1, y1, x2, y2].forEach((n) => {
      if (typeof n !== 'number' || Number.isNaN(n) || n < 0 || n > 100) throw new Error('all parameters must be positive integer (max 100)');
    });

    if (x1 !== x2 && y1 !== y2) throw new Error('only vertical or horizontal lines are supported');
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  /**
   *Returns the string at the specified coordinate
   *
   * @param {*} x
   * @param {*} y
   * @returns
   * @memberof Line
   */
  renderAt(x, y) {
    if ((x >= this.x1 && x <= this.x2)
      && (y >= this.y1 && y <= this.y2)) return 'X';
    return null;
  }

  /**
   *Returns true if the shape will be drawn inside the area specified
   *
   * @param {*} width
   * @param {*} heigth
   * @returns
   * @memberof Line
   */
  rendersInside(width, heigth) {
    return this.x1 < width && this.y1 < heigth && this.x2 < width && this.y2 < heigth;
  }
}
