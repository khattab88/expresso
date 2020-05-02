/* eslint-disable comma-dangle */
/* eslint-disable array-element-newline */
/* eslint-disable indent-legacy */
/* eslint-disable require-unicode-regexp */
/* eslint-disable no-undef */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    entry: ["babel-polyfill", "./src/index.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        // publicPath: "dist/" 
    },
    devtool: "cheap-source-map",
    plugins: [
        new HtmlWebpackPlugin({
            filename: "home/index.html",
            template: "./src/home/index.html"
        }),
        new HtmlWebpackPlugin({
            filename: "restaurant-list/index.html",
            template: "./src/restaurant-list/index.html"
        }),
        new HtmlWebpackPlugin({
            filename: "restaurant-menu/index.html",
            template: "./src/restaurant-menu/index.html"
        }),
        new HtmlWebpackPlugin({
            filename: "login/index.html",
            template: "./src/login/index.html"
        }),
        new HtmlWebpackPlugin({
            filename: "sign-up/index.html",
            template: "./src/sign-up/index.html"
        }),
        new HtmlWebpackPlugin({
            filename: "contact-us/index.html",
            template: "./src/contact-us/index.html"
        }),
        new HtmlWebpackPlugin({
            filename: "checkout/index.html",
            template: "./src/checkout/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    node: { fs: "empty" }
};
