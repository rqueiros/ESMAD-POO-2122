import Laptop from './Classes/Laptop.js';

const laptops = [];

function getNextId() {
	let maxId = laptops.length > 0 ? Math.max(...laptops.map((laptop) => laptop._id)) : 0;
	return maxId + 1;
}

let laptop1 = new Laptop(getNextId(), 'Dell', 2018, 'Intel', 8, 500);
laptops.push(laptop1);

let laptop2 = new Laptop(getNextId(), 'HP', 2019, 'AMD', 16, 1000);
laptops.push(laptop2);

let laptop3 = new Laptop(getNextId(), 'HP', 2017, 'Intel', 4, 250);
laptops.push(laptop3);

console.log(laptops);

// upgrade ram
console.log(laptop1._ram);
laptop1.upgrade('ram', 2);
console.log(laptop1._ram);

btni.addEventListener('click', () => {
	alert(laptops.length);
});

btnii.addEventListener('click', () => {
	const allRam = laptops.reduce((count, laptop) => count + laptop._ram, 0);
	alert(allRam);
});

btniii.addEventListener('click', () => {
	const id = prompt('Enter id');
	const foundLaptop = laptops.find((laptop) => laptop._id == id);
	console.log(foundLaptop);
});

btniv.addEventListener('click', () => {
	const allLaptops = laptops.filter((laptop) => laptop._ram >= 8);
	console.log(allLaptops);
});

btnv.addEventListener('click', () => {
	const key = prompt('Enter key');
	const order = prompt('Enter order');
	const sortedLaptops = laptops.sort((a, b) => {
		if (a[key] > b[key]) return 1 * order;
		if (a[key] < b[key]) return -1 * order;
		return 0;
	});
	console.log(sortedLaptops);
});

btnvi.addEventListener('click', () => {
	const count = {};
	laptops.forEach((laptop) => {
		if (count[laptop._brand]) count[laptop._brand]++;
		else count[laptop._brand] = 1;
	});
	console.log(count);
});

btnvii.addEventListener('click', () => {
	const sumHardDrive = laptops.filter((laptop) => laptop._cpu == 'Intel').reduce((sum, laptop) => sum + laptop._hardDrive, 0);
	console.log(sumHardDrive);
});
