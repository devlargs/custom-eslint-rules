module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow the usage of non-arrow functions",
    },
  },
  create: function (context) {
    return {
      FunctionDeclaration: function (node) {
        context.report({
          node: node,
          message: "Avoid using non-arrow functions in this application",
        });
      },
      FunctionExpression: function (node) {
        if (!node.parent || node.parent.type !== "ArrowFunctionExpression") {
          context.report({
            node: node,
            message: "Avoid using non-arrow functions in this application",
          });
        }
      },
    };
  },
};
