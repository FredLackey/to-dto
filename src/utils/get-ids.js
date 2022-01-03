const isObject  = require('./is-object');
const isString  = require('./is-string');
const isNumber  = require('./is-number');

module.exports = value => (
  isObject(value)
    ? []
    : Object.keys(value)
        .filter(key => (key.toUpperCase() === 'ID' && 
        (isString(value[key]) || isNumber(value[key]))))
);
