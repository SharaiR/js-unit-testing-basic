import {expect} from 'chai';
import {NumbersValidator} from '../../app/numbers_validator.js';

describe('getEvenNumbersForArray tests', () => {
    let validator;

    beforeEach(() => {
        validator = new NumbersValidator();
    });

    afterEach(() => {
        validator = null;
    });

    it('should return an array of even numbers', () => {
        const arrayOfNumbers = [3, 2, 8, 13, 18];
        const evenNumbersArray = validator.getEvenNumbersForArray(arrayOfNumbers);
        expect(evenNumbersArray).to.be.eql([2, 8, 18]);
    });

    it('should throw an error if array is not full of numbers', () => {
        const arrayOfNumbers = [3, 2, '8', 13, 18];
        expect(() => {
            validator.getEvenNumbersForArray(arrayOfNumbers);
        }).to.throw('[3,2,8,13,18] is not an array of "Numbers"');
    });
});
