class Rectangle {
	height = 0;
	width = 0;
	#color = '#FFFFFF';
	constructor(height = 1, width = 2) {
		this.height = height;
		this.width = width;
	}

	get _width() {
		return this.width;
	}

	set _width(value) {
		this.width = value < 0 ? 0 : value;
	}

	get _height() {
		return this.height;
	}

	set _height(value) {
		this.height = value < 0 ? 0 : value;
	}

	get _color() {
		return this.#color;
	}

    getArea() {
        return this.height * this.width;
    }

    getPerimeter() {
        return (this.height + this.width) * 2;
    }
}

let rect1 = new Rectangle(5, 4);
console.log('1bi', rect1);
let rect2 = new Rectangle();
console.log('1bii', rect2);

rect1._width = 10;
console.log('1c', rect1);
rect2._width = -3;
console.log('1c', rect2);

// rect1.#color = '#000000';
console.log('1d', rect1._color);

console.log("1ei", rect1.getArea());

console.log("1eii", rect1.getPerimeter());