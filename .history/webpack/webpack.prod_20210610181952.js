module.exports = {
  mode: 'production',
  devtool: 'source-map'
};

const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Pavel dev'),
    }),
  ],
};

