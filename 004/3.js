// Write a JS program to combine and print your first, last name and age
const firstName = 'Oleg';
const lastName = 'Savka';
const age = 25;

const conbineInfo = (firstName, lastName, age) => {
    return `My name is ${firstName} ${lastName}. I am ${age} years old`;
}

const result = conbineInfo(firstName, lastName, age);

console.log(`Result of conbine info is '${result}'`);