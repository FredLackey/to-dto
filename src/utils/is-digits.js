const DIGITS = '0123456789';

const isNumber = value => (!isNaN(parseFloat(value)) && isFinite(value));
const isString = value => (typeof value === 'string');
const isDigit = value => (isString(value) && 
  value.length === 1 && DIGITS.includes(value));
const isDigits = value => (isString(value) && 
  value === value.split('').filter(isDigit).join(''));

module.exports = value => (
  (isNumber(value) && isDigits(`${value}`)) ||
  isDigits(value)
);
