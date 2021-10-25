// Write a JS program check if a given positive number is a multiple of 3 or a multiple of 7

const multipleOf = (num, multipleOfNum) => {
    const remainder = num % multipleOfNum;

    if (remainder === 0) {
        return true;
    } else {
        return false;
    }
}

const a = 21;
const b = 13;

const aMultipleOf3 = multipleOf(a, 3);
console.log(`'${a}' multimpe of 3: ${aMultipleOf3}`);
const aMultipleOf7 = multipleOf(a, 7);
console.log(`'${a}' multimpe of 7: ${aMultipleOf7}`);

const bMultipleOf3 = multipleOf(b, 3);
console.log(`'${b}' multimpe of 3: ${bMultipleOf3}`);
const bMultipleOf7 = multipleOf(b, 7);
console.log(`'${b}' multimpe of 7: ${bMultipleOf7}`);