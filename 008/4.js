/*
    4.Create a second function (which takes argument "result") which should be executed after the
    first function is done and print the final message like `Your number is ${result}` ONLY for cases
    when the first function doesn't return " error“
*/

import firstFunction from './firstFunction.js';
import secondFunction from './secondFunction.js';

firstFunction().then(secondFunction).catch((e) => {
    console.error(e);
})

firstFunction(1).then(secondFunction).catch((e) => {
    console.error(e);
})

firstFunction(2).then(secondFunction).catch((e) => {
    console.error(e);
})