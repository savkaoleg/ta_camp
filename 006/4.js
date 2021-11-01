/*
    Write a JavaScript program to calculate the area and perimeter of a rectangle.
    Rectangle should be an object with properties width and height and methods getArea() and getPerimeter();
*/

const Rectangle = {
    length: 20,
    width: 10,
    getArea: function() {
        return this.length * this.width;
    },
    getPerimeter: function() {
        return 2 * (this.length + this.width)
    }
}

console.log(`Rectange ${Rectangle.length} x ${Rectangle.width}`);
console.log(`Area ${Rectangle.getArea()}`);
console.log(`Perimeter ${Rectangle.getPerimeter()}`);