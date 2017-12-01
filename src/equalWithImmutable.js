/**
 *  Date    : 2017/5/30
 *  Author  : PACO
 *  Declare : pure render based on immutable
 *            because functions are always not equal,
 *            so don't change function props once component were created
 */

'use strict';

import { fromJS, is } from 'immutable';

/**
 * deep equal by immutable
 *
 * @param objA first obj
 * @param objB second obj
 * @returns {boolean}  if equal
 */
function deepEqualWithImmutable(objA = null, objB = null) {

  /**
   * 剔除属性中的函数属性
   */
  if(typeof objA === 'object' && typeof objB === 'object' && objA !== null && objB !== null) {
    objA = fromJS(objA).filter(v => typeof v !== 'function');
    objB = fromJS(objB).filter(v => typeof v !== 'function');
  }

  return objA === objB || is(objA, objB);

}

module.exports = deepEqualWithImmutable;
