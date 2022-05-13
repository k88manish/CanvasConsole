import Canvas from '../elements/canvas.js';

/**
 *The command to create a Canvas
 *
 * @export
 * @class CanvasCommand
 */
export default class CanvasCommand {
  /**
   *Creates an instance of CanvasCommand from a string with this pattern: C w h
   * @param {*} str
   * @memberof CanvasCommand
   */
  constructor(str) {
    const canvasCmd = '[Canvas: C w h]';
    if (!str) throw new Error(`${canvasCmd} invalid canvas command`);
    const params = str.split(' ').splice(1);
    if (params.length !== 2) {
      throw new Error(
        `${canvasCmd} invalid number of parameters: ${params.length}, must be 2`
      );
    }
    const inputs = params.map((c) => parseInt(c, 10));
    try {
      this.shape = new Canvas(inputs[0], inputs[1]);
    } catch (err) {
      throw new Error(`${canvasCmd} canvas command ${err}`);
    }
  }

  /**
   *Returns the Canvas
   *
   * @returns
   * @memberof CanvasCommand
   */
  execute() {
    return this.shape;
  }
}
