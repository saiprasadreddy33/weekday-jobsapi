"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setMinExp = setMinExp;
exports.setPreferredCompanies = setPreferredCompanies;
exports.setPreferredLocations = setPreferredLocations;
exports.setPrefersOnsiteOrRemote = setPrefersOnsiteOrRemote;
exports.setPreferedTechStack = setPreferedTechStack;
exports.setPreferredRoles = setPreferredRoles;
exports.setMinBasePay = setMinBasePay;
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BASE_NAME = 'job_filters';
var SET_MIN_EXP = "".concat(BASE_NAME, "/SET_MIN_EXP");
var SET_PREFERRED_COMPANIES = "".concat(BASE_NAME, "/SET_PREFERRED_COMPANIES");
var SET_PREFERRED_LOCATIONS = "".concat(BASE_NAME, "/SET_PREFERRED_LOCATIONS");
var SET_PREFERS_ONSITE_OR_REMOTE = "".concat(BASE_NAME, "/SET_PREFERS_ONSITE_OR_REMOTE");
var SET_PREFERED_TECH_STACK = "".concat(BASE_NAME, "/SET_PREFERED_TECH_STACK");
var SET_PREFERRED_ROLES = "".concat(BASE_NAME, "/SET_PREFERRED_ROLES");
var SET_MIN_BASE_PAY = "".concat(BASE_NAME, "/SET_MIN_BASE_PAY");

function setMinExp(minExp) {
  return {
    type: SET_MIN_EXP,
    payload: {
      minExp: minExp
    }
  };
}

function setPreferredCompanies(preferredCompanies) {
  return {
    type: SET_PREFERRED_COMPANIES,
    payload: {
      preferredCompanies: preferredCompanies.length ? preferredCompanies : null
    }
  };
}

function setPreferredLocations(preferredLocations) {
  return {
    type: SET_PREFERRED_LOCATIONS,
    payload: {
      preferredLocations: preferredLocations.length ? preferredLocations : null
    }
  };
}

function setPrefersOnsiteOrRemote(prefersOnsiteOrRemote) {
  return {
    type: SET_PREFERS_ONSITE_OR_REMOTE,
    payload: {
      prefersOnsiteOrRemote: prefersOnsiteOrRemote
    }
  };
}

function setPreferedTechStack(preferedTechStack) {
  return {
    type: SET_PREFERED_TECH_STACK,
    payload: {
      preferedTechStack: preferedTechStack.length ? preferedTechStack : null
    }
  };
}

function setPreferredRoles(preferredRoles) {
  return {
    type: SET_PREFERRED_ROLES,
    payload: {
      preferredRoles: preferredRoles.length ? preferredRoles : null
    }
  };
}

function setMinBasePay(minBasePay) {
  return {
    type: SET_MIN_BASE_PAY,
    payload: {
      minBasePay: minBasePay
    }
  };
}

var initialState = {
  minExp: 0,
  preferredCompanies: null,
  preferredLocations: null,
  prefersOnsiteOrRemote: null,
  preferedTechStack: null,
  preferredRoles: null,
  minBasePay: 0
};

function jobFiltersReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_MIN_EXP:
      {
        var minExp = action.payload.minExp;
        return _objectSpread({}, state, {
          minExp: minExp
        });
      }

    case SET_PREFERRED_COMPANIES:
      {
        var preferredCompanies = action.payload.preferredCompanies;
        return _objectSpread({}, state, {
          preferredCompanies: preferredCompanies
        });
      }

    case SET_PREFERRED_LOCATIONS:
      {
        var preferredLocations = action.payload.preferredLocations;
        return _objectSpread({}, state, {
          preferredLocations: preferredLocations
        });
      }

    case SET_PREFERS_ONSITE_OR_REMOTE:
      {
        var prefersOnsiteOrRemote = action.payload.prefersOnsiteOrRemote;
        return _objectSpread({}, state, {
          prefersOnsiteOrRemote: prefersOnsiteOrRemote
        });
      }

    case SET_PREFERED_TECH_STACK:
      {
        var preferedTechStack = action.payload.preferedTechStack;
        return _objectSpread({}, state, {
          preferedTechStack: preferedTechStack
        });
      }

    case SET_PREFERRED_ROLES:
      {
        var preferredRoles = action.payload.preferredRoles;
        return _objectSpread({}, state, {
          preferredRoles: preferredRoles
        });
      }

    case SET_MIN_BASE_PAY:
      {
        var minBasePay = action.payload.minBasePay;
        return _objectSpread({}, state, {
          minBasePay: minBasePay
        });
      }

    default:
      return state;
  }
}

var _default = jobFiltersReducer;
exports["default"] = _default;
//# sourceMappingURL=jobFilters.dev.js.map
