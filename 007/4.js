/*
    Override method of father’s class.
*/

class Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        this.model = carModel;
        this.year = carYear;
        this.maxSpeed = maxSpeed;
    }

    displayInfo() {
        console.log(`
            Namel: ${this.model};
            Year: ${this.year};
            Max Speed: ${this.maxSpeed};
            Type: ${this.type};
        `);
    }
}

class Car extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = 'car';
    }

    displayInfo() {
        console.log(`
            Super fast and reliable:
            Namel: ${this.model};
            Year: ${this.year};
            Max Speed: ${this.maxSpeed};
            Type: ${this.type};
        `);
    }
}

const car = new Car('Tesla S Plaid', 2021, 321.9);
car.displayInfo();