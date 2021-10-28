/*
    Write a JavaScript function to check whether a string is blank
    or not (string with spaces should be also blank).
*/

const isBlank = (str) => {
    if (typeof str === 'string') {
        return /^\s*$/.test(str);
    } else {
        throw new Error('"str" should be a string')
    }
}

const printResult = (str, result) => {
    console.log(`"${str}" is black : ${result}`)
}

const str1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const str2 = '';
const str3 = '      f        ';
const str4 = '             ';
const str5 = '         \r\n\t\f\v     ';

const result1 = isBlank(str1);
printResult(str1, result1);

const result2 = isBlank(str2);
printResult(str2, result2);

const result3 = isBlank(str3);
printResult(str3, result3);

const result4 = isBlank(str4);
printResult(str4, result4);

const result5 = isBlank(str5);
printResult(str5, result5);