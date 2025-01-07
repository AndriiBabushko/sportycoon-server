module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    'header-min-length': [2, 'always', 15],
    'type-empty': [2, 'never'],
  },
};
