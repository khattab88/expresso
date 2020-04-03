const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: ["babel-polyfill", "./src/index.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "./dist"
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: "home/index.html",
            template: "./src/app/home/index.html"
        }),
        new htmlWebpackPlugin({
            filename: "restaurant-list/index.html",
            template: "./src/app/restaurant-list/index.html"
        }),
        new htmlWebpackPlugin({
            filename: "restaurant-menu/index.html",
            template: "./src/app/restaurant-menu/index.html"
        }),
        new htmlWebpackPlugin({
            filename: "login/index.html",
            template: "./src/app/login/index.html"
        }),
        new htmlWebpackPlugin({
            filename: "sign-up/index.html",
            template: "./src/app/sign-up/index.html"
        }),
        new htmlWebpackPlugin({
            filename: "contact-us/index.html",
            template: "./src/app/contact-us/index.html"
        }),
        new htmlWebpackPlugin({
            filename: "checkout/index.html",
            template: "./src/app/checkout/index.html"
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