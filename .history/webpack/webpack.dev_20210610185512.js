const webpack = require('webpack');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  devServer: {
    hot: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Development')
    })
  ]
}
