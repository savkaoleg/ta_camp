// Write a JS program to check two given numbers and print true if one of the number is 50 or if their sum is 50

const a = 20;
const b = 30;

const c = 10;
const d = 25;

const e = 50;

const check50 = (num1, num2) => {
    if ((num1 === 50 || num2 === 50) || (num1 + num2) === 50){
        return true;
    }

    return false
}

const abResult = check50(a, b);
console.log(`Check ${a}, ${b} : ${abResult}`);

const cdResult = check50(c, d);
console.log(`Check ${c}, ${d} : ${cdResult}`);

const aeResult = check50(a, e);
console.log(`Check ${a}, ${e} : ${aeResult}`);
