const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  devServer: {
    hot: true,
    open: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Development'),
    }),
    new ReactRefreshWebpackPlugin()
  ],
};
