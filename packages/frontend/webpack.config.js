const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./index.tsx", // Your React app's entry point (assuming it's in the 'src' directory)
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Output bundle filename
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Transpile JavaScript/TypeScript using Babel
        },
      },
    ],
  },
  plugins: [
    // Generates an HTML file to serve your bundled app
    new HtmlWebpackPlugin({
      template: "./app/index.html", // Path to your HTML template
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"], // Enable importing .js, .jsx, .ts, and .tsx files without specifying the file extension
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Serve content from the 'dist' directory
    },
    port: 3000, // Port to run the development server on
    open: true, // Automatically open the app in the default web browser
  },
};
