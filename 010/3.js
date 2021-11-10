/*
    3. Read previous string from file and convert to object
*/

import fs from 'fs';
import fileName from './fileName.js';

if (fs.existsSync(fileName)) {
    const prevContent = fs.readFileSync(fileName);
    const prevContentObject = JSON.parse(prevContent);

    console.log(`Object: ${JSON.stringify(prevContentObject, null, 2)}`)
}