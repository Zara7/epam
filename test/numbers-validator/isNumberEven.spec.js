import {expect} from 'chai';
import {describe, beforeEach, afterEach, it} from 'mocha';
import NumbersValidator from '../../app/numbers_validator.js';

describe('isNumberEven', function() {
  let validator;

  beforeEach(function() {
    validator = new NumbersValidator();
  });
  afterEach(function() {
    validator = null;
  });
  describe('isNumberEven', () => {
    it('should return true if the number is even', () => {
      expect(validator.isNumberEven(4)).to.be.true;
    });

    it('should return false if the number is odd', () => {
      expect(validator.isNumberEven(3)).to.be.false;
    });

    it('should throw an error if the argument is not a number', () => {
      // eslint-disable-next-line max-len
      expect(() => validator.isNumberEven('abc')).to.throw(Error, '[abc] is not a number.');
    });
  });
  describe('getEvenNumbersFromArray', () => {
    it('should return an array of even numbers', () => {
      const inputArray = [1, 2, 3, 4, 5, 6];
      const expectedResult = [2, 4, 6];
      // eslint-disable-next-line max-len
      expect(validator.getEvenNumbersFromArray(inputArray)).to.deep.equal(expectedResult);
    });

    it('should throw an error if the argument is not an array', () => {
      // eslint-disable-next-line max-len
      expect(() => validator.getEvenNumbersFromArray('abc')).to.throw(Error, '[abc] is not an array.');
    });
  });
  describe('isAllNumbers', () => {
    it('should return true if all elements in the array are numbers', () => {
      const inputArray = [1, 2, 3, 4, 5];
      expect(validator.isAllNumbers(inputArray)).to.be.true;
    });

    // eslint-disable-next-line max-len
    it('should return false if any element in the array is not a number', () => {
      const inputArray = [1, 'abc', 3, 4, 5];
      expect(validator.isAllNumbers(inputArray)).to.be.false;
    });

    it('should throw an error if the argument is not an array', () => {
      // eslint-disable-next-line max-len
      expect(() => validator.isAllNumbers('abc')).to.throw(Error, '[abc] is not an array.');
    });
  });

  describe('isInteger', () => {
    it('should return true if the value is an integer', () => {
      expect(validator.isInteger(5)).to.be.true;
    });

    it('should return false if the value is not an integer', () => {
      expect(validator.isInteger(5.5)).to.be.false;
    });

    it('should throw an error if the argument is not a number', () => {
      // eslint-disable-next-line max-len
      expect(() => validator.isInteger('abc')).to.throw(Error, '[abc] is not a number.');
    });
  });
});
