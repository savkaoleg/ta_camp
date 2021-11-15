import calculator from '../010/1.js';
import { expect } from 'chai';

describe('Positive', () => {

    describe('+', () => {
        it('1+1=2', () => {
            expect(calculator(1, 1, '+')).to.be.equal(2);
        });
        it('0+0=0', () => {
            expect(calculator(0, 0, '+')).to.be.equal(0);
        });
        it('-1+(-10)=-11', () => {
            expect(calculator(-1, -10, '+')).to.be.equal(-11);
        });
    });

    describe('-', () => {
        it('1-1=0', () => {
            expect(calculator(1, 1, '-')).to.be.equal(0);
        });
        it('0-0=0', () => {
            expect(calculator(0, 0, '-')).to.be.equal(0);
        });
        it('10-1=9', () => {
            expect(calculator(10, 1, '-')).to.be.equal(9);
        });
        it('-1-(-10)=9', () => {
            expect(calculator(-1, -10, '-')).to.be.equal(9);
        });
    });

    describe('*', () => {
        it('1*1=1', () => {
            expect(calculator(1, 1, '*')).to.be.equal(1);
        });
        it('0*0=0', () => {
            expect(calculator(0, 0, '*')).to.be.equal(0);
        });
        it('2*3=6', () => {
            expect(calculator(2, 3, '*')).to.be.equal(6);
        });
    })

    describe('/', () => {
        it('10/2=5', () => {
            expect(calculator(10, 2, '/')).to.be.equal(5);
        });
        it('10/1=10', () => {
            expect(calculator(10, 1, '/')).to.be.equal(10);
        });
        it('10/10=1', () => {
            expect(calculator(10, 10, '/')).to.be.equal(1);
        });        
    })
});