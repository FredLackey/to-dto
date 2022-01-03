const getUids = require('./get-uids');
const single = require('./single');

module.exports = value => (single(getUids(value)));
