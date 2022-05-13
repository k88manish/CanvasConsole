/**
 *A shape that represents a filled area of a canvas
 *
 * @export
 * @class Fill
 */
export default class Fill {
  /**
   *Creates an instance of Fill.
   * @param {*} x
   * @param {*} y
   * @param {*} color
   * @memberof Fill
   */
  constructor(x, y, color) {
    [x, y].forEach((n) => {
      if (typeof n !== 'number' || Number.isNaN(n) || n < 0 || n > 100) throw new Error('(x,y) must be positive integer (max 100)');
    });

    if (color.length !== 1) throw new Error('color must be a single character');
    this.x = x;
    this.y = y;
    this.color = color;
  }

  /**
   *Returns the string at the specified coordinate
   *
   * @param {*} x
   * @param {*} y
   * @returns
   * @memberof Fill
   */
  renderAt(x, y) {
    return this.pixels && this.pixels[x] && this.pixels[x][y] ? this.pixels[x][y] : null;
  }

  /**
   *Returns true if the shape will be drawn inside the area specified
   *
   * @param {*} width
   * @param {*} heigth
   * @returns
   * @memberof Fill
   */
  rendersInside(width, heigth) {
    return this.x < width && this.y < heigth;
  }


  /**
   *Returns a new structure in which the pixels have been painted
   *
   * @param {*} pixels
   * @returns
   * @memberof Fill
   */
  paint(pixels) {
    this.pixels = pixels.slice(0);
    this.floodFillLoop(this.pixels, this.x, this.y, ' ', this.color);
    return this.pixels;
  }

  /**
   *Linear version of the paint algorithm
   *
   * @param {*} pixels
   * @param {*} x
   * @param {*} y
   * @param {*} targetColor
   * @param {*} replacementColor
   * @returns
   * @memberof Fill
   */
  floodFillLoop(pixels, x, y, targetColor, replacementColor) {
    const node = pixels[x][y];
    if (node !== targetColor) return;
    if (node === replacementColor) return;
    let q = [{
      x,
      y,
    }];
    while (q.length > 0) {
      const n = q[0];
      q = q.slice(1);
      this.processNodeAt(pixels, n.x + 1, n.y, targetColor, replacementColor, q);
      this.processNodeAt(pixels, n.x - 1, n.y, targetColor, replacementColor, q);
      this.processNodeAt(pixels, n.x, n.y - 1, targetColor, replacementColor, q);
      this.processNodeAt(pixels, n.x, n.y + 1, targetColor, replacementColor, q);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  processNodeAt(pixels, x, y, targetColor, replacementColor, q) {
    const nextNode = pixels.length > x && pixels[x].length > y && pixels[x][y];
    if (nextNode === targetColor) {
      // eslint-disable-next-line no-param-reassign
      pixels[x][y] = replacementColor;
      q.push({
        x,
        y,
      });
    }
  }
}