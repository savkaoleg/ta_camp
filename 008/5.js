/*
    5. Write same tasks(1-4) using async/await
*/

import firstFunction from './firstFunction.js';
import secondFunction from './secondFunction.js';

try {
    secondFunction(await firstFunction());
} catch(e) {
    console.error(e);
}

try {
    secondFunction(await firstFunction(1));
} catch(e) {
    console.error(e);
}

try {
    secondFunction(await firstFunction(2));
} catch(e) {
    console.error(e);
}