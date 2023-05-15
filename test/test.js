const { rules } = require("../index.js");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });

ruleTester.run("no-assignment-in-if", rules["no-assignment-in-if"], {
  valid: [{ code: `if (x == 3) {}` }, { code: `if (x === 3) {}` }],
  invalid: [
    {
      code: `if (x = 2) {}`,
      errors: [{ message: /./ }],
    },
    {
      code: `if (x === 2) {} else if (x = 2) {}`,
      errors: [{ message: /./ }],
    },
  ],
});
