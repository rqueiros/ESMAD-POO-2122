// 2a
// function printName(name) {
// 	console.log(`HELLO ${name}`);
// }
// let myName = 'John';
// printName(myName);

// 2c
// function calculateNumber(first, second, op) {
// 	switch (op) {
// 		case '+':
// 			return first + second;
// 			break;
// 		case '-':
// 			return first - second;
// 			break;
// 		case '/':
// 			if (second == 0) return 'ERROR: Cannot divide by 0';
// 			return first / second;
// 			break;
// 		case '*':
// 			return first * second;
// 			break;

// 		default:
// 			break;
// 	}
// }

// let firstNumber = prompt('Insert the first number');
// let secondNumber = prompt('Insert the second number');
// let operator = prompt('Insert the operator');

// let result = calculateNumber(parseInt(firstNumber), parseInt(secondNumber), operator);

// console.log(result);

// 2i

function addAllNumbers(...args) {
	let added = 0;
	for (let i = 0; i < args.length; i++) {
		added += args[i];
	}
	return added;
}

let result = addAllNumbers(1, 2, 3, 4, 5, 6);

console.log(result);