/**
 *
 * Class containing methods for validating numbers
 * @class NumbersValidator
 */
export class NumbersValidator {
    /**
     * Creates an instance of NumbersValidator
     * @memberof NumbersValidator
     */
    constructor() {}

    /**
     *
     * Checks if a number is even or not
     * @param {Number} number number to check
     * @return {Boolean} true if number is even
     * @memberof NumbersValidator
     */
    isNumberEven(number) {
        const typeOfVariable = typeof number;
        if (typeOfVariable !== 'number') {
            // eslint-disable-next-line max-len
            throw new Error(`[${number}] is not of type "Number" it is of type "${typeOfVariable}"`);
        } else {
            if (!Number.isFinite(number)) {
                // eslint-disable-next-line max-len
                throw new Error(`[${number}] is special numeric value it is of type "${typeOfVariable}"`);
            } else {
                return number % 2 === 0;
            }
        }
    }

    /**
     *
     * Get even numbers for array
     * @param {Array<Number>} arrayOfNumbers array of numbers of go through
     * @return {Array<Number>} array of even numbers
     * @memberof NumbersValidator
     */
    getEvenNumbersForArray(arrayOfNumbers) {
        if (Array.isArray(arrayOfNumbers) &&
        arrayOfNumbers.every((item) => typeof item === 'number')) {
            const arrayOfEvenNumbers = arrayOfNumbers.filter(this.isNumberEven);
            return arrayOfEvenNumbers;
        } else {
            throw new Error(`[${arrayOfNumbers}] is not an array of "Numbers"`);
        }
    }
}
