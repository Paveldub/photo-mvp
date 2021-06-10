const webpack = require('webpack');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
};

module.exports = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Production'),
    }),
  ],
};
