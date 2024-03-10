module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow the usage of id attributes",
    },
  },
  create: function (context) {
    return {
      JSXAttribute: function (node) {
        if (node.name.name === "id") {
          const jsxElement = context
            .getAncestors()
            .find((ancestor) => ancestor.type === "JSXElement");
          if (jsxElement) {
            context.report({
              node: jsxElement,
              message: "Avoid using id attributes on JSX elements",
            });
          }
        }
      },
    };
  },
};
