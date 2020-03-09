const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "../../dist"
    },
    mode: "development",
    devtool: "source-map",
    resolve: {
        extensions: [
            ".ts",
            ".tsx",
            ".js",
            ".json"
        ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    plugins: [
        new CopyWebpackPlugin([{
            from: "./index.html", to: "../dist/index.html"
        }]),
    ]
};