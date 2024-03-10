module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow the usage of classNames on React elements",
    },
  },
  create: function (context) {
    return {
      JSXAttribute: function (node) {
        if (node.name.name === "className") {
          const jsxElement = context
            .getAncestors()
            .find((ancestor) => ancestor.type === "JSXElement");
          if (jsxElement) {
            context.report({
              node: jsxElement,
              message: "Avoid using classNames on React elements",
            });
          }
        }
      },
    };
  },
};
