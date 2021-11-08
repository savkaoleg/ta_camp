/*
    If data is not a number, the function returns a promise rejected instantly and give the word
    "error" (in a string
*/

import firstFunction from './firstFunction.js';

firstFunction().then(() => {
    console.log('done');
}).catch((e) => {
    console.error(e);
})