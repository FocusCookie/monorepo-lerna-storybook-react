const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  target: "web",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    modules: ["src", "node_modules"],
    extensions: [".ts", ".tsx", ".js"],
  },
  output: {
    filename: "index.js",
    library: "formControls",
    libraryTarget: "umd",
    path: path.resolve(__dirname, "dist"),
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
    "styled-components": "styled-components",
  },
  mode: "production",
};
