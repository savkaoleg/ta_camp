/*
    Write a JavaScript function with conditional statement to sort
    three numbers
*/
const sortThreeNumberts = (num1, num2, num3) => {
    if (num1 < num2) {
        if (num2 < num3) {
            return `${num1}, ${num2}, ${num3}`;
        }
        if (num3 < num1) {
            return `${num3}, ${num1}, ${num2}`;
        }
    } else {
        if (num1 < num3) {
            return `${num2}, ${num1}, ${num3}`;
        }
        if (num3 < num2) {
            return `${num3}, ${num2}, ${num1}`;
        }
    }
    
    if (num2 < num3) {
        if (num3 < num1) {
            return `${num2}, ${num3}, ${num1}`;
        }
        if (num1 < num2) {
            return `${num1}, ${num2}, ${num3}`;
        }
    } else {
        if (num2 < num1) {
            return `${num3}, ${num2}, ${num1}`;
        }
        if (num1 < num3) {
            return `${num1}, ${num3}, ${num2}`;
        }
    }
    
    if (num3 < num1) {
        if (num1 < num2) {
            return `${num3}, ${num1}, ${num2}`;
        }
        if (num2 < num3) {
            return `${num2}, ${num3}, ${num1}`;
        }
    } else {
        if (num3 < num2) {
            return `${num1}, ${num3}, ${num2}`;
        }
        if (num2 < num1) {
            return `${num2}, ${num1}, ${num3}`;
        }
    }
}

const num1 = 1;
const num2 = 2;
const num3 = 3;

console.log(`Result ${sortThreeNumberts(num1, num2, num3)}`);
console.log(`Result ${sortThreeNumberts(num1, num3, num2)}`);

console.log(`Result ${sortThreeNumberts(num2, num1, num3)}`);
console.log(`Result ${sortThreeNumberts(num2, num3, num1)}`);

console.log(`Result ${sortThreeNumberts(num3, num1, num2)}`);
console.log(`Result ${sortThreeNumberts(num3, num2, num1)}`);