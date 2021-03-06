const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        loader: 'babel-loader',
        test: '/\.js|jsx$/',
        exclude: /node_modules/
      },
    ],
  },
};