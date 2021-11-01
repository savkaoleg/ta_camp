/*
    Write a JavaScript function to get the last element of an array
*/

const getLastElementFromArray = (arr) => {
    if (
        arr &&
        Array.isArray(arr) &&
        arr.length > 0
    ) {
        return arr[arr.length - 1];
    } else {
        throw new Error('Input must be not empty array');
    }
}

const array1 = [1, 2, 3, 4, 5];
const result1 = getLastElementFromArray(array1);
console.log(`Result 1 : ${result1}`);

const array2 = '123';
try {
    const result2 = getLastElementFromArray(array2);
} catch(e) {
    console.error(e);
}