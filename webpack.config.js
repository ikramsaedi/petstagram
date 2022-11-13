const path = require("path");
const webpack = require("webpack");

module.exports = {
    mode: "production",
    devtool: "source-map",
    entry: {
        application: "./app/javascript/application.tsx",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(tsx|ts)$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.jpg/,
                type: "asset/resource",
            },
        ],
    },

    // this means i can import across typescript files without specifying the file extension
    // when importing ts files without the file extension, browser throws an error, but with the file extension, typescript threw an error
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    output: {
        filename: "[name].js",
        sourceMapFilename: "[name].js.map",
        path: path.resolve(__dirname, "app/assets/builds"),
    },
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1,
        }),
    ],
};
