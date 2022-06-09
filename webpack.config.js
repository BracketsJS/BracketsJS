const path = require("path");
module.exports = {
    entry: "./src/index.js",
    mode: "production",
    module: {
        rules: [
            {
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".js"],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [

    ],
};