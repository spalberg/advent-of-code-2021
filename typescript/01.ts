import { getPuzzleInput } from './utils';

function getNumbers(input: string) {
  return input
    .split('\n')
    .filter(Boolean)
    .map((n) => parseInt(n, 10));
}

function part1(input: string) {
  const numbers = getNumbers(input);
  let increases = 0;
  for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i - 1] < numbers[i]) {
      increases += 1;
    }
  }
  return increases;
}

function part2(input: string) {
  const numbers = getNumbers(input);
  let increases = 0;
  let window = numbers[0] + numbers[1] + numbers[2];
  for (let i = 3; i < numbers.length; i += 1) {
    const newWindow = numbers[i - 2] + numbers[i - 1] + numbers[i];
    if (window < newWindow) {
      increases += 1;
    }
    window = newWindow;
  }
  return increases;
}

console.log(`Part 1: ${part1(getPuzzleInput('01'))}`);
console.log(`Part 2: ${part2(getPuzzleInput('01'))}`);
