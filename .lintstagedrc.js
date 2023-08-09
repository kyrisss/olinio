module.exports = {
  "*.{ts,tsx}": ["./node_modules/.bin/prettier --write --config .prettierrc", "./node_modules/.bin/eslint --fix -c .eslintrc"],
  "*.scss": ["./node_modules/.bin/stylelint run --fix --config .stylelintrc.js"],
};
