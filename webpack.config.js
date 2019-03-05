const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(css)|(scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader", // Run postcss actions
            options: {
              plugins: function() {
                // postcss plugins, can be exported to postcss.config.js
                return [require("autoprefixer")];
              }
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.(png)|(jpg)|(svg)|(jpeg)$/,
        use: ["file-loader"]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.pug$/,
        use: ["html-loader", "pug-html-loader"]
      },
      {
        test: /\.(otf)|(eot)|(woff)|(woff2)|(ttf)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/templates/index.html",
      meta: {
        charset: "utf-8",
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"
      },
      inject: "body"
    }),
    new HtmlWebpackPlugin({
      filename: "file.html",
      template: "./src/templates/file.pug",
      meta: {
        charset: "utf-8",
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"
      },
      inject: "body"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkfilename: "[id].css"
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};
