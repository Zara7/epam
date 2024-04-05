/* eslint-disable max-len */
/**
 * A class for validating numbers.
 */
export class NumbersValidator {
  /**
   * Checks if a number is even.
   * @param {number} number - The number to be checked.
   * @return {boolean} - Returns true if the number is even, false otherwise.
   */
  isNumberEven(number) {
    if (typeof number !== 'number') {
      throw new Error(`[${number}] is not a number.`);
    }
    return number % 2 === 0;
  }

  /**
   * Gets even numbers from an array.
   // eslint-disable-next-line max-len, max-len, max-len, max-len
   * @param {Array<number>} arrayOfNumbers - The array containing numbers to be checked.
   * @return {Array<number>} - An array of even numbers.
   */
  getEvenNumbersFromArray(arrayOfNumbers) {
    if (!Array.isArray(arrayOfNumbers)) {
      throw new Error(`[${arrayOfNumbers}] is not an array.`);
    }
    return arrayOfNumbers.filter((number) => this.isNumberEven(number));
  }

  /**
   * Checks if all elements in an array are numbers.
   * @param {Array<number>} arrayOfNumbers - The array to be checked.
   * @return {boolean} - Returns true if all elements are numbers, false otherwise.
   */
  isAllNumbers(arrayOfNumbers) {
    if (!Array.isArray(arrayOfNumbers)) {
      throw new Error(`[${arrayOfNumbers}] is not an array.`);
    }
    return arrayOfNumbers.every((number) => typeof number === 'number');
  }

  /**
   * Checks if a value is an integer.
   * @param {number} n - The value to be checked.
   * @return {boolean} - Returns true if the value is an integer, false otherwise.
   */
  isInteger(n) {
    if (typeof n !== 'number') {
      throw new Error(`[${n}] is not a number.`);
    }
    return Number.isInteger(n);
  }
}

// Export the NumbersValidator class to be used in other modules
export default NumbersValidator;
