// Write a JS program to create a new string adding “Test_" in front of a given string

const start = 'Test_';
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

const addToFront = (input) => {
    return start+input;
}

const result = addToFront(text);

console.log(`Result of add to front is '${result}'`);