"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = reducer;
exports.setActiveTab = exports.AVAILABLE_TABS = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BASE_NAME = 'tabs';
var SET_TAB = "".concat(BASE_NAME, "/SET_TAB");
var AVAILABLE_TABS = {
  applied: {
    label: 'Editor'
  },
  all: {
    label: 'Search Jobs'
  }
};
exports.AVAILABLE_TABS = AVAILABLE_TABS;
var initialState = {
  activeTab: AVAILABLE_TABS.all
};

var setActiveTab = function setActiveTab(_ref) {
  var name = _ref.name;
  return {
    type: SET_TAB,
    payload: name
  };
};

exports.setActiveTab = setActiveTab;

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_TAB:
      return _objectSpread({}, state, {
        activeTab: AVAILABLE_TABS[action.payload]
      });

    default:
      return state;
  }
}
//# sourceMappingURL=tabs.dev.js.map
