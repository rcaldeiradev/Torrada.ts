const path = require('path');

module.exports = {
  entry: './src/main.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: 'torrada.js',
    path: path.resolve(__dirname, 'dist/js'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
}