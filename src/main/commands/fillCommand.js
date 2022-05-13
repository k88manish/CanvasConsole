import Fill from '../elements/fill.js';

/**
 *The command to create a Fill
 *
 * @export
 * @class FillCommand
 */
export default class FillCommand {
  /**
   *Creates an instance of FillCommand from a string with this pattern: B x y c
   * @param {*} str
   * @memberof FillCommand
   */
  constructor(str) {
    const fillCmd = '[B x y c]';
    if (!str) throw new Error(`${fillCmd} invalid fill command`);
    const params = str.split(' ').splice(1);
    if (params.length !== 3)
      throw new Error(
        `${fillCmd} invalid number of parameters: ${params.length}, must be 3`
      );

    const x = parseInt(params[0], 10);
    const y = parseInt(params[1], 10);
    try {
      this.shape = new Fill(x, y, params[2]);
    } catch (err) {
      throw new Error(`${fillCmd} fill command ${err}`);
    }
  }

  /**
   *Returns the Fill
   *
   * @returns
   * @memberof FillCommand
   */
  execute() {
    return this.shape;
  }
}
