module.exports = {
  meta: {
    type: "suggestion", // Specify the type of rule (suggestion, warning, or error)
    docs: {
      description: "Prevent the addition of console.log statements",
      category: "Best Practices", // Specify the category of the rule
      recommended: true, // Specify whether the rule is recommended or not
    },
    schema: [], // Specify if the rule accepts any options
  },

  create: function (context) {
    return {
      // This method will be called for each MemberExpression found in the code
      MemberExpression(node) {
        // Check if the MemberExpression is console.log
        if (
          node.object &&
          node.object.type === "Identifier" &&
          node.object.name === "console" &&
          node.property &&
          node.property.type === "Identifier" &&
          node.property.name === "log"
        ) {
          // Report console.log usage
          context.report({
            node: node,
            message: "Unexpected console.log statement found.",
          });
        }
      },
    };
  },
};
