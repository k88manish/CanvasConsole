import FillCommand from './commands/fillCommand.js';
import RectangleCommand from './commands/rectangleCommand.js';
import CanvasCommand from './commands/canvasCommand.js';
import LineCommand from './commands/lineCommand.js';
import QuitCommand from './commands/quitCommand.js';

/**
 *An interpreter for commands objects
 *
 * @export
 * @class CommandRegistry
 */
export default class CommandRegistry {
  /**
   *Returns the command based on the first letter of the input.
   *
   * @static
   * @param {*} str
   * @returns
   * @memberof CommandRegistry
   */
  static create(str) {
    if (!str || str.length < 1) throw new Error('invalid command');
    const action = str[0].toUpperCase();
    switch (action) {
      case 'C':
        return new CanvasCommand(str);
      case 'L':
        return new LineCommand(str);
      case 'B':
        return new FillCommand(str);
      case 'R':
        return new RectangleCommand(str);
      case 'Q':
        return new QuitCommand();
      default:
        return null;
    }
  }
}
