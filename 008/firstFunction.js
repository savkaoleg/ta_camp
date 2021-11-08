import isOdd from './isOdd.js';

const firstFunction = (data) => {
    return new Promise((resolve, reject) => {
        if (typeof data !== 'number') {
            reject('error');
        }

        if (isOdd(data)) {
            setTimeout(() => {
                resolve('odd');
            }, 1000);
        } else {
            setTimeout(() => {
                resolve('even');
            }, 2000);
        }
    });
}

export default firstFunction;