import Vehicle from "./Vehicle.js";

export default class Car extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = 'car';
    }

    transportPeople() {
        console.log('I am starting transporting passengers');
    }
}