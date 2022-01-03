module.exports = (value, isEmptyOkay = false) => (
  (typeof value === 'object') &&
  (value !== null) &&
  (value instanceof Array) &&
  (isEmptyOkay || value.length > 0)
);
