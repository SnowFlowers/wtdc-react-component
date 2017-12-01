/**
 *  Date    : 2017/5/30
 *  Author  : PACO
 *  Declare : React Base Component For Extends
 */
import deepEqual from './equalWithImmutable';

'use strict';
import React from 'react';

export default class Component extends React.Component {

  /**
   * shouldUpdate your component
   *
   * @param nextProps
   * @param nextState
   * @returns {boolean}
   */
  shouldComponentUpdate(nextProps, nextState) {
    return !deepEqual(nextProps, this.props) || !deepEqual(this.state, nextState)
  }
}