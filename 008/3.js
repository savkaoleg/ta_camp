/*
    3.If data is an even number, return a promise rejected 2 seconds later and give "even" (in a string
*/

import firstFunction from './firstFunction.js';

firstFunction(2).then((result) => {
    console.log(`done: ${result}`);
}).catch((e) => {
    console.error(e);
})