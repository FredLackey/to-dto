const isArray = require('./is-array');

module.exports = value => (
  (isArray(value) && value.length === 1)
    ? value[0]
    : undefined
);
