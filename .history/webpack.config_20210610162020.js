const path = require('path');

module.exports = {
  entry: './src/index.tsx',
    resolve: {
    extensions: ['.tsx', '.js', '.ts']
  }
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.ts',
  },
  module: {
    rules: [
      {
        test: /\.[tj]s$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
