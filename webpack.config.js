const { resolve } = require("path");

const config = {
  entry: "./index.js",
  output: {
    path: resolve(__dirname, "build"),
    filename: "bundle.js"
  }
};

module.exports = config;
