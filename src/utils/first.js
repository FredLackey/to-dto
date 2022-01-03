const isArray = require('./is-array');

module.exports = value => (
  (isArray(value) && value.length > 0)
    ? value[0]
    : undefined
);
