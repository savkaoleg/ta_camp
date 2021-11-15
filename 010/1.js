/*
    1. Develop a simple calculator function (+, -, /, * operations),
    like calc(3, 3, “+”) should return 6 (3+3).
    Also, handle a cases when not supported math operation is provided or wrong data format
*/
const operators = ['+', '-', '/', '*']

const calc = (num1, num2, operator) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Parameters should be integer numbers');
    }

    if (!operators.includes(operator)) {
        throw new Error(`Operator should be one of ${operators.join(', ')}`);
    }

    // +
    if (operator === operators[0]) {
        return num1 + num2;
    }

    // -
    if (operator === operators[1]) {
        return num1 - num2;
    }
    
    // /
    if (operator === operators[2]) {
        if (num2 === 0) {
            throw new Error('num2 should be integer number');
        }

        return num1 / num2;
    }

    // *
    if (operator === operators[3]) {
        return num1 * num2;
    }
}

export default calc; 