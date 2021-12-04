import { getPuzzleInput } from './utils';

type Command = {
  command: 'forward' | 'down' | 'up';
  units: number;
};

function getCommands(input: string): Command[] {
  return input
    .split('\n')
    .filter(Boolean)
    .map((line) => line.split(' '))
    .map(
      ([command, units]) =>
        ({ command, units: parseInt(units, 10) } as Command),
    );
}

function part1(input: string) {
  const commands = getCommands(input);
  let horizontalPosition = 0;
  let depth = 0;
  for (const { command, units } of commands) {
    switch (command) {
      case 'forward':
        horizontalPosition += units;
        break;
      case 'down':
        depth += units;
        break;
      case 'up':
        depth -= units;
        break;
    }
  }
  return horizontalPosition * depth;
}

function part2(input: string) {
  const commands = getCommands(input);
  let horizontalPosition = 0;
  let depth = 0;
  let aim = 0;
  for (const { command, units } of commands) {
    switch (command) {
      case 'forward':
        horizontalPosition += units;
        depth += aim * units;
        break;
      case 'down':
        aim += units;
        break;
      case 'up':
        aim -= units;
        break;
    }
  }
  return horizontalPosition * depth;
}

console.log(`Part 1: ${part1(getPuzzleInput('02'))}`);
console.log(`Part 2: ${part2(getPuzzleInput('02'))}`);
