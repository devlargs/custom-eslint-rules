const noUseEffect = require("./rules/no-use-effect");
const booleanNamingVerb = require("./rules/boolean-naming-verb");
const noNonArrow = require("./rules/no-non-arrow-function");
const noClassName = require("./rules/no-class-name");
const dontUseId = require("./rules/dont-use-id");

module.exports = {
  rules: {
    // "boolean-naming-verb": booleanNamingVerb,
    "no-use-effect": noUseEffect,
    // "no-non-arrow-function": noNonArrow,
    // "no-class-name": noClassName,
    // "dont-use-id": dontUseId,
  },
};
