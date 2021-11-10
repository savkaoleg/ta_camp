/*
    4. Make some change to object and append it as new line to existed file
*/

import fileName from './fileName.js';
import fs from 'fs';

if (fs.existsSync(fileName)) {
    const prevContent = fs.readFileSync(fileName);
    const prevContentObject = JSON.parse(prevContent);
    prevContentObject.age = 15;

    fs.appendFileSync(fileName, '\n' + JSON.stringify(prevContentObject));
}