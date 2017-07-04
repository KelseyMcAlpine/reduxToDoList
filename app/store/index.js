/*jshint esversion: 6*/

import { createStore } from 'redux';
import reducer from '../reducer';

var defaultState = {
  todos: [],
};

exports.configureStore = (initialState = defaultState ) => {
  var store = createStore(reducer, initialState);
  return store;
};
