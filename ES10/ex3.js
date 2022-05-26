class Car {
	#brand = '';
	#plate = '';
	#color = '';
	#capacity = 0;
	#currentCapacity = 0;
	#consumption = 0;
	#fuelType = '';

	constructor(brand, plate, color, currentCapacity, capacity, consumption, fuelType) {
		this.#brand = brand;
		this.#plate = plate;
		this.#color = color;
		this.#capacity = capacity;
		this.#currentCapacity = currentCapacity;
		this.#consumption = consumption;
		this.#fuelType = fuelType;
	}

	get brand() {
		return this.#brand;
	}
	get plate() {
		return this.#plate;
	}
	get color() {
		return this.#color;
	}
	get capacity() {
		return this.#capacity;
	}
	get currentCapacity() {
		return this.#currentCapacity;
	}
	get consumption() {
		return this.#consumption;
	}
	get fuelType() {
		return this.#fuelType;
	}
	set brand(value) {
		this.#brand = value;
	}
	set plate(value) {
		this.#plate = value;
	}
	set capacity(value) {
		this.#capacity = value;
	}
	set currentCapacity(value) {
		if (value < 0) value = 0;
		if (value > this.#capacity) value = this.#capacity;

		this.#currentCapacity = value;
	}
	set consumption(value) {
		this.#consumption = value < 0 ? 0 : value;
	}
	set fuelType(value) {
		if (value != 'Gasolina' && value != 'Gasóleo') {
			value = 'Gasolina';
		}
		this.#fuelType = value;
	}

	fill(amount) {
		this.currentCapacity += amount;
	}
	calculateConsumption(kms) {
		const usedFuel = (kms * this.consumption) / 100;
		this.currentCapacity -= usedFuel;
	}
}

const car1 = new Car('Nissan', '91-GH-15', 'verde', 40, 60, 5, 'Gasóleo');
console.log(car1.currentCapacity);
const car2 = new Car('Opel', '23-AB-23', 'branco', 50, 55, 6.5, 'Gasolina');
console.log(car2);
const car3 = new Car('Nissan', '12-CX-45', 'preto', 22, 70, 4.5, 'Gasóleo');
console.log(car3);

car1.fill(50);
console.log(car1.currentCapacity);
car1.calculateConsumption(150);
console.log(car1.currentCapacity);

const cars = [car1, car2, car3];

function getCountByBrand(brand) {
	return cars.filter((car) => car.brand === brand).length;
}

function getSumByFuelType(fuelType) {
	return cars.filter((car) => car.fuelType === fuelType).reduce((acc, car) => acc + car.currentCapacity, 0);
}

console.log(getCountByBrand('Nissan'));
console.log(getSumByFuelType('Gasóleo'));