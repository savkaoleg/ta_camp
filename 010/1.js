/*
    1. Create student object and set ‘name’, ‘surname’ and ‘rate:
    - Name and surname generate using randomstring
    - Rate generate using Math, in range 1-100
*/

import randomstring from 'randomstring';

const student = {
    'name': randomstring.generate(),
    'surname': randomstring.generate(),
    'rate': Math.floor((Math.random() * 100) + 1)
}

export default student;