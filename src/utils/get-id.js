const getIds = require('./get-ids');
const single = require('./single');

module.exports = value => (single(getIds(value)));
