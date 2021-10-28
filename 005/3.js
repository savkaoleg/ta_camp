/*
    Write a JavaScript function to convert a string in abbreviated
    form. console.log(abbrev (“Name Surname")) – should be
    “N.S.” (should convert lower case names to upper)
*/

const toAbbreviatedForm = (str) => {
    if (typeof str === 'string') {
        const splitResult = str.split(' ');

        if (splitResult.length === 2) {
            return `${splitResult[0].charAt(0).toUpperCase()}.${splitResult[1].charAt(0).toUpperCase()}.`;
        } else {
            throw new Error('"str" should contain only name and famile name');
        }

    } else {
        throw new Error('"str" should be a string');
    }
}

const printResult = (str, result) => {
    console.log(`"${str}" abbreviated to : ${result}`)
}

const p1 = 'Name Surname';
const p2 = 'Name Surname Name Surname';
const p3 = 'Name';

const result1 = toAbbreviatedForm(p1);
printResult(p1, result1);

try {
    const result2 = toAbbreviatedForm(p2);
    printResult(p2, result2);
} catch(e) {
    console.error(e);
}

try {
    const result3 = toAbbreviatedForm(p3);
    printResult(p3, result3);
} catch(e) {
    console.error(e);
}
