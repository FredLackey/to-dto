const copy      = require('./copy');

const hasId     = require('./has-id');
const hasUid    = require('./has-uid');

const isArray   = require('./is-array');
const isDefined = require('./is-defined');
const isDigits  = require('./is-digits');
const isObject  = require('./is-object');
const isString  = require('./is-string');

module.exports = {
  copy,

  hasId,
  hasUid,

  isArray,
  isDefined,
  isDigits,
  isObject,
  isString,

  isArr : isArray,
  isDef : isDefined,
  isDig : isDigits,
  isObj : isObject,
  isStr : isString,
};
