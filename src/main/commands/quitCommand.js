/**
 *A command that exits the program
 *
 * @export
 * @class QuitCommand
 */
export default class QuitCommand {
  // eslint-disable-next-line class-methods-use-this
  execute() {
    process.exit();
  }
}
