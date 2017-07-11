/**
 * Created by wzx on 2017/7/10.
 */

module.exports = {
    entry: "./examples/index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {test: /\.js$/, use: "babel-loader"}
        ]
    },
    devServer: {
        contentBase: "./examples",
        compress: true,
        port: 9000
    }
};