/*
    Add static method to one class, try to call it and investigate output.
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
    
    static xml(vehicle) {
        const {
            model,
            year,
            maxSpeed,
            type
        } = vehicle;
        return `
            <car>
                <name>${model}</name>
                <year>${year}</year>
                <maxSpeed>${maxSpeed}</maxSpeed>
                <type>${type}</type>
            </car>
        `;
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

const car = new Car('fira', 1945, 10);
console.log(Vehicle.xml(car));
