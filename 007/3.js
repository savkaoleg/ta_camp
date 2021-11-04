/*
    Call method of father’s class.
*/

class Machine {
    constructor(energyType) {
        this.energyType = energyType;
    }

    displayEnergyType() {
        console.log(`
            I need: ${this.energyType}
        `);
    }
}

class Vehicle extends Machine {
    constructor(carModel, carYear, maxSpeed, energyType) {
        super(energyType);
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
    constructor(carModel, carYear, maxSpeed, energyType) {
        super(carModel, carYear, maxSpeed, energyType);
        this.type = 'car';
    }

    transportPeople() {
        console.log('I am starting transporting passengers');
    }
}

const car = new Car('BMW 320d', 2021, 320, 'disel');
car.displayInfo();
car.displayEnergyType();