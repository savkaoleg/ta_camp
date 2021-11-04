/*
    Replicate code from slide 11, create instances of car and truck. Try to call
    different methods for both, investigate output using console.log().
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

    transportPeople() {
        console.log('I am starting transporting passengers');
    }
}

class Truck extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = 'truck';
    }

    transportContainer() {
        console.log('I am starting transporting heavy container');
    }
}

const car = new Car('Opel Astra', 2008, 220);
const truck = new Truck('Daf', 2021, 190);

car.displayInfo();
car.transportPeople();
console.log('===');
truck.displayInfo();
truck.transportContainer();