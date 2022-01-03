module.exports = value => (
  typeof value === 'object' && 
  value !== null && 
  !(value instanceof Array));
