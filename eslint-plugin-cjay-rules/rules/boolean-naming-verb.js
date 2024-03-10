module.exports = {
  meta: {
    type: "problem",
    hasSuggestions: true,
    docs: {
      description:
        "This rule describes what is expected from Boolean variables in entire codebase. That includes standalone boolean variables and Object properties alike.",
    },
  },
  create(context) {
    const booleanStartVerbs = ["loading", "should", "is", "has", "init"];

    const booleanEndVerbs = ["disabled", "enabled"];

    function isBooleanVariableName(name, value) {
      if (name.charAt(0) === "i" && name.charAt(1) === "s") {
        return true;
      }

      return false;
    }

    return {
      VariableDeclarator(node) {
        // Add TypeScript type annotation here

        const { id, init } = node;

        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (
          (init &&
            init.type === "CallExpression" &&
            typeof init.arguments[0].value === "boolean") ||
          init.callee.name === "useState"
        ) {
          // Extract the name and value of the boolean variable from the useState declaration

          const variableName = id.elements[0].name;
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
          const variableValue = init.arguments[0].value;

          // Check if the variable name follows the specified patterns based on its boolean value
          if (!isBooleanVariableName(variableName, variableValue)) {
            context.report({
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              node,
              message: "Gago mali ka",
            });
          }
        }
      },
    };
  },
};
