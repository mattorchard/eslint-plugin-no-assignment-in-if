module.exports = {
  meta: {
    name: "no-assignment-in-if",
    type: "problem",
  },
  rules: {
    "no-assignment-in-if": {
      meta: {
        type: "problem",
      },
      create: function (context) {
        return {
          "IfStatement > AssignmentExpression": function (node) {
            context.report({
              node: node,
              message: "Do not perform assignment inside an if statement",
              data: undefined,
            });
          },
        };
      },
    },
  },
};
