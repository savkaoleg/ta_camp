// Write a JS program to find if the first number is larger from the two given positive integers

const a = 5;
const b = 10;

const getFirstNymber = (num) => {
    return parseInt(num.toString()[0]);
}

const combineNumvers = (num1, num2) => {
    const num1FirstNumber = getFirstNymber(num1);
    const num2FirstNumber = getFirstNymber(num2);
    
    if (num1FirstNumber > num2FirstNumber) {
        return `'${num1}' first integer bigger than '${num2}'`;    
    }
    
    if (num1FirstNumber < num2FirstNumber) {
        return `'${num2}' first integer bigger than '${num1}'`;    
    }

    if (num1FirstNumber === num2FirstNumber) {
        return `'${num1}' equals '${num2}'`;  
    }
}

const result = combineNumvers(a, b);
console.log(result);