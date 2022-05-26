// 2a
const names = [];

// 2b
function addName() {
	const nameToAdd = inputName.value;
    // 2i
    if(names.some(name => name == nameToAdd))
    return alert("Name already exists!")

	names.push(nameToAdd);
	console.log('2b', names);
}

// 2c
names.push('John', 'Peter', 'Mary', 'Ann', 'Michael');
console.log('2c', names);

// 2d
const lastName = names.pop();
console.log('2d', lastName);

// 2e
const firstName = names.shift();
console.log('2e', firstName);

// 2f
const names2 = ['Charles', 'Paul'];

// 2g
const allNames = names.concat(names2);
console.log("2g", allNames);

// 2h
const allNamesSpread = [...names, ...names2];
console.log("2h", allNamesSpread);