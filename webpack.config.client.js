const path = require("path");
const webpack = require("webpack");

const config = {
    name: "app",
    mode: "development",
    devtool: "inline-source-map",
    entry: {
        app: './src/Main.jsx'
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
    },
    devServer: {
        contentBase: "./dist",
        compress: true,
        hot: true
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(ttf|eot|svg|gif|jpg|png)?$/,
                use: "file-loader"
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    resolve: {
        extensions: [".js", ".jsx"]
    }
};

module.exports = config;