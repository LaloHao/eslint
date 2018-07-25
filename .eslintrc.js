module.exports = {
  extends: "airbnb",
  parser: "babel-eslint",
  plugins: [
    "jest",
  ],
  env: {
    "jest/globals": true,
  },
  rules: {
    "import/extensions": [2, "always"],
  },
};
