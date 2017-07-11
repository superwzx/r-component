/**
 * Created by wzx on 2017/7/10.
 */

module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {test: /\.js$/, use: "babel-loader"}
        ]
    }
};