const isObject  = require('./is-object');

module.exports = value => (
  isObject(value)
    ? []
    : Object.keys(value)
        .filter(key => (key.startsWith('_')))
);
