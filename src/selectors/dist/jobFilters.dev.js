"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filtersSelector = exports.baseSelector = void 0;

var _toolkit = require("@reduxjs/toolkit");

var baseSelector = function baseSelector(state) {
  return state.jobFilters;
}; // filters


exports.baseSelector = baseSelector;
var filtersSelector = (0, _toolkit.createSelector)(baseSelector, function (filters) {
  return filters;
});
exports.filtersSelector = filtersSelector;
//# sourceMappingURL=jobFilters.dev.js.map
