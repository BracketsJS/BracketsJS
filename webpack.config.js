const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: '$',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
    modules: [path.resolve(__dirname, 'src')],
  },
  mode: 'production',
  devtool: 'source-map',
};

