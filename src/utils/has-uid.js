const getUids = require('./get-ids');
const isArray = require('./is-array');

module.exports = value => (isArray(getUids(value)));
