const _ = require('../utils');

module.exports = item => {
    
  if (!_.isObject(item)) { return item; }

  const invalid = _.getUnderscores(item).filter(_.isString);
  
  const result = {};

  Object.keys(item)
    .filter(key => (key && !invalid.includes(key)))
    .forEach(key => {
      result[key] = item[key];
    });
  
  return result;
}