module.exports = (value, isEmptyOkay = false) => (
  typeof value === 'string' &&
  (isEmptyOkay || value.trim().length > 0)
);
