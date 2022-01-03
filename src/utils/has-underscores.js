const isArray = require('./is-array');

const hasUnderscores = require('./get-underscores');

module.exports = value => (isArray(hasUnderscores(value)));
