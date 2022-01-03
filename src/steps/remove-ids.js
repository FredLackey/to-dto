const _ = require('../utils');

module.exports = item => {
  
  const invalid = _.getIds(item).filter(_.isString);
  
  const result = {};

  Object.keys(item)
    .filter(key => (key && !invalid.includes(key)))
    .forEach(key => {
      result[key] = item[key];
    });
  
  return result;
}