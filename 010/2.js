/*
    2. Use JSON.stringify() method to make student a JSON string and write it into file (not existed)
*/

import fs from 'fs';
import student from './1.js';
import fileName from './fileName.js';

const fileContent = JSON.stringify(student);
fs.writeFileSync(fileName, fileContent);