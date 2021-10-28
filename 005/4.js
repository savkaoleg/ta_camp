/*
    Write a JavaScript function that accept two integers and
    display the larger.
*/

const displayLarger = (int1, int2) => {
    if (typeof int1 !== 'number' || typeof int2 !== 'number') {
        throw new Error('Parameters should be integer numbers');
    }

    const max = Math.max(int1, int2);

    console.log(`Larger : ${max}`);
}

displayLarger(5, 10);
displayLarger(10, 10);
displayLarger('1', '3');