/*
    2.If data is an odd number, return a promise resolved 1 second later and give "odd" (in a string
*/

import firstFunction from './firstFunction.js';

firstFunction(1).then((result) => {
    console.log(`done: ${result}`);
}).catch((e) => {
    console.error(e);
})