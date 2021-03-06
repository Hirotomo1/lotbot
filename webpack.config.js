const path = require("path");
const HtmlwebpackPliguin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  devServer: {
    port: "3000",
    hot: true,
    open: true,
  },

  module: {
    rules: [
      {
        test: /￥.js(x?)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.ts(x?)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { url: false },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlwebpackPliguin({
      template: "./src/index.html",
    }),
  ],

  resolve: {
    alias: {
      "@/*": ["src/*"],
    },
    extensions: [".js", ".ts", ".tsx"],
  },
};
