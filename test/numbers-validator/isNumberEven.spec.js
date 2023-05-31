import { expect } from 'chai';
import { NumbersValidator } from '../../app/numbers_validator.js';

describe('isNumberEven tests', () => {
    let validator;

    beforeEach(() => {
        validator = new NumbersValidator();
    });

    afterEach(() => {
        validator = null;
    });

    it('should return true when provided with an even number', () => {
        const validationResult = validator.isNumberEven(4);
        expect(validationResult).to.be.equal(true);
    });

    it('should return false if number is odd', () => {
        expect(validator.isNumberEven(5)).to.be.equal(false);
    });

    it('should throw an error when provided a string', () => {
        expect(() => {
            validator.isNumberEven('4');
        }).to.be.throw('[4] is not of type "Number" it is of type "string"');
    });

    it('should throw an error when provided a NaN', () => {
        const valueNaN = 3/'text';
        expect(() => {
            validator.isNumberEven(valueNaN);
        }).to.be.throw('[NaN] is special numeric value it is of type "number"');
    });

    it('should throw an error when provided an Infinity', () => {
        const valueInfinity = 3/0;
        expect(() => {
            validator.isNumberEven(valueInfinity);
        }).to.be.throw('[Infinity] is special numeric value it is of type "number"');
    });
});
