/*
    There are two arrays with individual values,
    write a JavaScript program to compute the sum of each individual index value from the given arrays
    and save them to third array
*/

const checkifArray = (arr) => {    
    if (
        arr &&
        Array.isArray(arr) &&
        arr.length > 0
    ) {
        return;
    } else {
        throw new Error('Input must be not empty array');
    }
}

const arrSum = (arr1, arr2) => {
    checkifArray(arr1);
    checkifArray(arr2);

    const max = Math.max(arr1.length, arr2.length);
    const result = [];

    for (var i = 0; i < max; i++) {
        if(arr1[i] && arr2[i]) {
            result.push(arr1[i] + arr2[i]);
        } else {
            result.push(arr1[i] || arr2[i]);
        }
    }

    return result;
}

const arr1 = [1, 2, 3];
const arr2 = [5, 6, 7];
const arr3 = [2, 4];

const result1 = arrSum(arr1, arr2);
console.log(`Result 1: ${result1.join(', ')}`);

const array2 = '123';
try {
    const result2 = arrSum(arr1, array2);
} catch(e) {
    console.error(e);
}

const result3 = arrSum(arr1, arr3);
console.log(`Result 3: ${result3.join(', ')}`);