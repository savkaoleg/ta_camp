/*
    Move classes to separate files and import them into the app using import/export.
*/

import Car from "./Car.js";

const car = new Car('BMW 335', 2011, 304.166);
car.displayInfo();
car.transportPeople();