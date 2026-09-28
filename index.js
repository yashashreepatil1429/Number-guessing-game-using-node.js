const readline = require('node:readline');

const secretNumber = Math.floor(Math.random() * 100) + 1;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let attempts = 0;

async function play() {
  console.log('I picked a number between 1 and 100.');
  process.stdout.write('Your guess: ');

  for await (const input of rl) {
    const guess = Number(input.trim());

    if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
      console.log('Enter a whole number between 1 and 100.');
      process.stdout.write('Your guess: ');
      continue;
    }

    attempts += 1;

    if (guess < secretNumber) {
      console.log('Too low!');
      process.stdout.write('Your guess: ');
    } else if (guess > secretNumber) {
      console.log('Too high!');
      process.stdout.write('Your guess: ');
    } else {
      console.log(`Correct! You guessed the number in ${attempts} ${attempts === 1 ? 'attempt' : 'attempts'}.`);
      break;
    }
  }

  rl.close();
}

play();