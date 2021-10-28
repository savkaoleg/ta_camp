/*
    Write a JavaScript function to check if given string includes
    given symbol.
*/

const validateSymbol = (symbol) => {
    if (typeof symbol === 'string' && symbol.length === 1) {
        return;
    } else {
        throw new Error('"symbol" should be one lenght string')
    }
}

const validateStr = (str) => {
    if (typeof str === 'string' && str.length > 0) {
        return;
    } else {
        throw new Error('"str" should be not empty string')
    }
}

const strIncludesSymbol = (str, symbol) => {
    validateStr(str);
    validateSymbol(symbol);

    return str.includes(symbol);
}

const printResult = (str, symbol, result) => {
    console.log(`"${str}" includes "${symbol}" : ${result}`)
}

const str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

const p1 = 'i';
const p2 = 'q';
const p3 = 'qwer';

const result1 = strIncludesSymbol(str, p1);
printResult(str, p1, result1);

const result2 = strIncludesSymbol(str, p2);
printResult(str, p2, result2);

try {
    const result3 = strIncludesSymbol('', p1);
    printResult(str, p1, result3);
} catch(e) {
    console.error(e);
}

try {
    const result4 = strIncludesSymbol(str, p3);
    printResult(str, p3, result3);
} catch(e) {
    console.error(e);
}