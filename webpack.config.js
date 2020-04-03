const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: ["babel-polyfill", "./src/index.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/bundle.js"
    },
    devServer: {
        contentBase: "."
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: "index.html",
            template: "./index.html"
        }),
        new htmlWebpackPlugin({
            filename: "restaurant-list/index.html",
            template: "./restaurant-list/index.html"
        }),
        new htmlWebpackPlugin({
            filename: "restaurant-menu/index.html",
            template: "./restaurant-menu/index.html"
        }),
        new htmlWebpackPlugin({
            filename: "login/index.html",
            template: "./login/index.html"
        }),
        new htmlWebpackPlugin({
            filename: "sign-up/index.html",
            template: "./sign-up/index.html"
        }),
        new htmlWebpackPlugin({
            filename: "contact-us/index.html",
            template: "./contact-us/index.html"
        }),
        new htmlWebpackPlugin({
            filename: "checkout/index.html",
            template: "./checkout/index.html"
        }),
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
    }
};