module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "import/extensions": "off",
    "react/react-in-jsx-scope": "off",
    quotes: ["error", "double"],
    camelcase: "off",
    "arrow-body-style": "off",
    "one-var": "off",
    "react/no-unescaped-entities": 0,
    "no-underscore-dangle": "off",
    "react/jsx-props-no-spreading": [
      "error",
      { html: "enforce", custom: "ignore", explicitSpread: "enfore" },
    ],
    "no-console": "off",
    "no-use-before-define": "off",
    "no-nonoctal-decimal-escape": "off",
    "valid-jsdoc": "error",
    "no-restricted-globals": ["error", "addEventListener"],
  },
};
