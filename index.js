const _ = require('./utils');
const __ = require('./steps');

const toDto = (item) => {
  if (_.isArray(item)) {
    return toDtos(item);
  }
  if (!_.isObject(item)) {
    return item;
  }

  let newItem = _.copy(item);

  newItem = __.removeIds(newItem);
  newItem = __.removeUndefined(item);
  newItem = __.removeUnderscores(item);

  return newItem;
};

const toDtos = (itemOrItems) => {
  if (_.isObject(itemOrItems)) {
    return toDto(itemOrItems);
  }
  if (!_.isArray(itemOrItems)) {
    return itemOrItems;
  }

  const result = [];
  itemOrItems.forEach(item => {
    const newItem = toDto(item);
    if (!_.isDefined(newItem)) {
      return;
    }
    result.push(newItem);
  });

}

const toDtoOrDtos = (itemOrItems) => {
  if (_.isArray(itemOrItems)) {
    return toDtos(itemOrItems);
  }
  if (_.isObject(itemOrItems)) {
    return toDto(itemOrItems);
  }
  return itemOrItems;
};

module.exports = toDtoOrDtos;