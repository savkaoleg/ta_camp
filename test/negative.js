import calculator from '../010/1.js';
import { expect } from 'chai';

describe('Negative', () => {

    describe('Params', () => {
        it('No params', () => {
            expect(() => {
                calculator()
            }).to.throw(Error);
        });
        it('No second param and operator', () => {
            expect(() => {
                calculator(1);
            }).to.throw(Error);
        });
        it('No operator', () => {
            expect(() => {
                calculator(1, 1);
            }).to.throw(Error);
        });
        it('Invalid operator', () => {
            expect(() => {
                calculator(1, 1, 1);
            }).to.throw(Error);
        });
        it('Invalid num1', () => {
            expect(() => {
                calculator('1', 1, '+');
            }).to.throw(Error);
        });
        it('Invalid num2', () => {
            expect(() => {
                calculator(1, '1', '+');
            }).to.throw(Error);
        });
    });

    describe('/', () => {
        it('1/0=E', () => {
            expect(() => {
                calculator(1, 0, '/')
            }).to.throw(Error);
        });
    });
});