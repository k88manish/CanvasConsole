import { createInterface } from 'readline';
import CommandRegistry from './src/main/commandRegistry.js';
import ConsoleInterface from './src/main/consoleInterface.js';

function start() {
  let pauseInput = false;
  const io = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  let consoleInterface = new ConsoleInterface(io);

  function pauseReadLine(fn) {
    pauseInput = true;
    io.pause();
    try {
      fn();
    } catch (err) {
      io.write(err.message);
      io.write('\n');
    }
    io.resume();
    pauseInput = false;
  }

  io.on('line', (input) => {
    if (pauseInput) return;
    pauseReadLine(() => {
      const command = CommandRegistry.create(input);
      if (command) {
        const shape = command.execute();
        if (shape.renderAt) {
          consoleInterface = consoleInterface.addElement(shape);
          consoleInterface.render();
          io.write('Enter command: \n');
        }
      }
    });
  });

  pauseReadLine(() => {
    io.write('\n\n CSCanvas is online\n\n');
    io.write('Enter command: \n');
  });
}

start();
