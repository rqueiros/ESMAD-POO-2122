export default class Laptop {
	#id = 0;
	brand = '';
	year = 2022;
	cpu = '';
	ram = 0;
	hardDrive = 0;

	constructor(id, brand, year, cpu, ram, hardDrive) {
		this.id = id;
		this.brand = brand;
		this.year = year;
		this.cpu = cpu;
		this.ram = ram;
		this.hardDrive = hardDrive;
	}

	get _id() {
		return this.id;
	}

	get _brand() {
		return this.brand;
	}

	set _brand(value) {
		this.brand = value;
	}

	get _year() {
		return this.year;
	}

	set _year(value) {
		this.year = value;
	}

	get _cpu() {
		return this.cpu;
	}

	set _cpu(value) {
		if (['AMD', 'Intel'].includes(value)) this.cpu = value;
	}

	get _ram() {
		return this.ram;
	}

	set _ram(value) {
		this.ram = value;
	}

	get _hardDrive() {
		return this.hardDrive;
	}

	set _hardDrive(value) {
		this.hardDrive = value;
	}

	upgrade(type, quantity) {
		if (['ram', 'hardDrive'].includes(type)) {
			this[type] += quantity;
		}
	}
}
