class Dice {
	#faceValue = [];
	#quantity = 0;
	constructor() {
		this.#faceValue = [1, 2, 3, 4, 5, 6];
		this.#quantity = 6;
	}

	get _faceValue() {
		return this.#faceValue;
	}

	set _faceValue(value) {
		this.#faceValue = value;
	}

	getQuantityFaces() {
		return this.#quantity;
	}

	roll() {
		let random = Math.floor(Math.random() * this.#quantity);
		return this.#faceValue[random];
	}
}

const rolls = [];
const dice = new Dice();
for (let i = 0; i < 100; i++) {
	rolls.push(dice.roll());
}
console.log(rolls);

// calculate frequency of rolls
const frequency = {};
for (let i = 0; i < rolls.length; i++) {
	frequency[rolls[i]] = (frequency[rolls[i]] || 0) + 1;
}
console.log(frequency);

// create table with frequency of rolls and display it
const table = document.createElement('table');
const tableBody = document.createElement('tbody');
const firstRow = document.createElement('tr');
const faceCell = document.createElement('td');
faceCell.innerHTML = 'Face';
firstRow.appendChild(faceCell);
for (let face in frequency) {
	const td = document.createElement('td');
	td.innerHTML = face;
	firstRow.appendChild(td);
}
tableBody.appendChild(firstRow);
const secondRow = document.createElement('tr');
const frequencyCell = document.createElement('td');
frequencyCell.innerHTML = 'Frequencia';
secondRow.appendChild(frequencyCell);
for (let face in frequency) {
	const td = document.createElement('td');
	td.innerHTML = frequency[face];
	secondRow.appendChild(td);
}
tableBody.appendChild(secondRow);
table.appendChild(tableBody);
document.body.appendChild(table);
