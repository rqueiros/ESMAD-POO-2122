let randomNumber = parseInt(Math.random() * 100);
console.log(randomNumber);
const MAX_TRIES = 5;
let currentTry = 0;
let enteredNumber = -1;

function guessNumber(random, entered) {
	if (random < entered) {
		alert('LOWER');
		return -1;
	} else if (random > entered) {
		alert('Higher');
		return 1;
	} else {
		alert('CONGRATULATIONS, YOU GUESSED IT!');
		return 0;
	}
}

while (guessNumber(randomNumber, enteredNumber) != 0 && currentTry < MAX_TRIES) {
	enteredNumber = prompt('Enter a number between 1 and 100');
	currentTry++;
	console.log(currentTry, randomNumber);
}

if (MAX_TRIES == currentTry) alert('PATIENCE, PLEASE PLAY AGAIN!');
