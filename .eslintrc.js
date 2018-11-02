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
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  },
};
