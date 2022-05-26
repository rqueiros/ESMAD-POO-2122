// 1a
const countries = ['Portugal', 'Spain', 'France'];
//OU const countries = new Array('Portugal', 'Spain', 'France');

console.log('1a', countries);

// 1b
const first = countries.shift();
console.log('1b', first);
console.log('1b', countries);

// 1c
const last = countries.pop();
console.log('1c', last);
console.log('1c', countries);

// 1d
countries.push('German');
console.log('1d', countries);

// 1e
// [1] é a posição em que está o elemento "German"
countries[1] = 'Germany';
console.log('1e', countries);

// 1f
// alert(`The array has ${countries.length} countries!`)

// 1g
let countries2 = [];

// 1h
countries2 = countries;
console.log('1h', countries2);

// 1i
countries2.push('Denmark');
console.log('1i', countries2);

// 1j
// alert(countries)
console.log('1J countries', countries);
console.log('1J countries2', countries2);

// 1k
for (let i = 0; i < countries.length; i++) {
	console.log('1k', `${i + 1} - ${countries[i]}`);
}

// 1L
countries.forEach((country, index) => {
	console.log('1L', `${index + 1} - ${country}`);
});
