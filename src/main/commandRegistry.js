import FillCommand from './commands/fillCommand.js';
import RectangleCommand from './commands/rectangleCommand.js';
import CanvasCommand from './commands/canvasCommand.js';
import LineCommand from './commands/lineCommand.js';
import QuitCommand from './commands/quitCommand.js';

const COMMANDS = [
  {
    type: 'Canvas',
    pattern: /C (\d{1,3}) (\d{1,3})/,
  },
  {
    type: 'Line',
    pattern: /L (\d{1,3}) (\d{1,3}) (\d{1,3}) (\d{1,3})/,
  },
  {
    type: 'Rectangle',
    pattern: /R (\d{1,3}) (\d{1,3}) (\d{1,3}) (\d{1,3})/,
  },
  {
    type: 'Fill',
    pattern: /B (\d{1,3}) (\d{1,3}) (\w+)/,
  },
  {
    type: 'Quit',
    pattern: /Q/,
  },
];

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
    const command = this.getCommand(str);
    if (!command) throw new Error('invalid command');
    const match = command.pattern.exec(str);
    const params = match.slice(1);
    switch (command.type) {
      case 'Canvas':
        return new CanvasCommand(params);
      case 'Line':
        return new LineCommand(params);
      case 'Fill':
        return new FillCommand(params);
      case 'Rectangle':
        return new RectangleCommand(params);
      case 'Quit':
        return new QuitCommand();
      default:
        return null;
    }
  }

  static getCommand(str) {
    for (let i = 0; i < COMMANDS.length; i++) {
      const command = COMMANDS[i];
      if (command.pattern.test(str)) {
        return command;
      }
    }

    return null;
  }
}
