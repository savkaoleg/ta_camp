// Write a JS program to check a given integer is bigger than 100

const biggerThan100 = (num) => {
    return num > 100;
}

const printResult = (num) => {
    console.log(`Result ${num} bigger than 100 : ${biggerThan100(num)}`);
}

printResult(0);
printResult(10);
printResult(100);
printResult(1000);