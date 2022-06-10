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
    optimization: {
        minimize: true,
        mangleExports: false,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    keep_classnames: true,
                    keep_fnames: true,
                    mangle: false
                }
            })
        ]
    },
    plugins: [

    ],
};
