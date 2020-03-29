const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/js/index.js",
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
        })
    ]
};