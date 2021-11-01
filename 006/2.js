/*
    Write a simple JavaScript program to join all elements of the following array into a string
*/

const joinElements = (arr, separator = ', ') => {
    if (
        arr &&
        Array.isArray(arr) &&
        arr.length > 0
    ) {
        return arr.join(separator);
    } else {
        throw new Error('Input must be not empty array');
    }
}

const array1 = [1, 2, 3, 4, 5];
const result1 = joinElements(array1);
console.log(`Result 1: ${result1}`);

const array2 = '123';
try {
    const result2 = joinElements(array2);
} catch(e) {
    console.error(e);
}

const array3 = [1, 2, 3, 4, 5];
const result3 = joinElements(array3, '][');
console.log(`Result 3: ${result3}`);
