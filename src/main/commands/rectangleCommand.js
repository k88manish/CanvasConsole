import Rectangle from '../elements/rectangle.js';

/**
 *The command to create a Rectangle
 *
 * @export
 * @class RectangleCommand
 */
export default class RectangleCommand {
  /**
   *Creates an instance of RectangleCommand from a string with this patter: R x1 y1 x2 y2
   * @param {*} str
   * @memberof RectangleCommand
   */
  constructor(str) {
    const rectangleCmd = '[R x1 y1 x2 y2]';
    if (!str) throw new Error(`${rectangleCmd} invalid rectangle command`);
    const params = str.split(' ').splice(1);
    if (params.length !== 4)
      throw new Error(
        `${rectangleCmd} invalid number of parameters: ${params.length}, must be 4`
      );
    const inputs = params.map((c) => parseInt(c, 10));
    try {
      this.shape = new Rectangle(inputs[0], inputs[1], inputs[2], inputs[3]);
    } catch (err) {
      throw new Error(`${rectangleCmd} rectangle command: ${err}`);
    }
  }

  /**
   *Returns the Rectangle
   *
   * @returns
   * @memberof RectangleCommand
   */
  execute() {
    return this.shape;
  }
}
