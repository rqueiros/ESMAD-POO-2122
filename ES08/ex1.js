// 1a
const games = [
	{ name: 'Rick Dangerous', year: 1989 },
	{ name: 'Goblins', year: 1992 },
	{ name: 'Golden Axe', year: 1989 },
];

// 1b
for (let game of games) {
	console.log(`1b NAME: ${game.name} / YEAR: ${game.year}`);
}

// 1c
console.log(`1c Number of games: ${games.length}`);

// 1d
const addGame = (e) => {
	e.preventDefault();
	const newGame = {
		name: addName.value,
		year: addYear.value,
	};

	// 1e
	if (games.some((game) => game.name == newGame.name)) return alert('Game already exists');

	games.push(newGame);
	console.log(games);
};
addForm.addEventListener('submit', addGame);

// 1f
const averageLaunchDate = (games) => {
	let sum = games.reduce((acc, game) => acc + game.year, 0);
	return sum / games.length;
};
console.log(`1f Average launch date: ${averageLaunchDate(games)}`);

// 1g
const removeGame = (e) => {
	e.preventDefault();
	let toRemoveName = removeName.value;
	let indexToRemove = games.findIndex((game) => game.name == toRemoveName);
	if (indexToRemove == -1) return alert('Game not found');
	games.splice(indexToRemove, 1);
	console.log(games);
};
removeForm.addEventListener('submit', removeGame);

// 1h
const gamesFrom90 = (games) => {
	return games.filter((game) => game.year >= 1990 && game.year < 2000).map((game) => game.name);
};
console.log(`1h Games from 1990: ${gamesFrom90(games)}`);

// 1i
const concatenateGameNames = (games) => {
	return games
		.map((game) => game.name)
		.join('')
		.toLowerCase()
		.replaceAll(' ', '');
};
console.log(`1i Concatenated game names: ${concatenateGameNames(games)}`);
