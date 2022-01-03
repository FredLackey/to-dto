const _ = require('../utils');

module.exports = item => {
    
  if (!_.isObject(item)) { return item; }

  const invalid = Object
    .keys(item)
    .filter(key => (key && !_.isDefined(item[key])));
  
  const result = {};

  Object.keys(item)
    .filter(key => (key && !invalid.includes(key)))
    .forEach(key => {
      result[key] = item[key];
    });
  
  return result;
}