'use strict';

var _redux = require('redux');

function store(initialState) {
  return store = (0, _redux.createStore)(initialState, function () {});
};

module.exports = store;