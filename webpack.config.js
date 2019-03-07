const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

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
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images"
            }
          }
        ]
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
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
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
      filename: "games.html",
      template: "./src/templates/games.pug",
      meta: {
        charset: "utf-8",
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"
      },
      inject: "body"
    }),
    new HtmlWebpackPlugin({
      filename: "teams.html",
      template: "./src/templates/teams.pug",
      title: "Teams",
      meta: {
        charset: "utf-8",
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"
      },
      inject: "body"
    }),
    new HtmlWebpackPlugin({
      filename: "events.html",
      template: "./src/templates/events.pug",
      title: "Events",
      meta: {
        charset: "utf-8",
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"
      },
      inject: "body"
    }),
    new HtmlWebpackPlugin({
      filename: "rankings.html",
      template: "./src/templates/rankings.pug",
      title: "Rankings",
      meta: {
        charset: "utf-8",
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"
      },
      inject: "body"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkfilename: "[id].css",
      publicPath: "assets/css"
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};
