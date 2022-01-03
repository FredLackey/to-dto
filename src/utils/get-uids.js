const isObject  = require('./is-object');
const isString  = require('./is-string');

module.exports = value => (
  isObject(value)
    ? []
    : Object.keys(value)
        .filter(key => (key.toUpperCase() === 'UID' && 
        (isString(value[key]))))
);
