var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    main: './src/index'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('[name].css', { allChunks: true }),
    new HtmlPlugin({
      cache: true,
      hash: true,
      title: 'Spreadsheet implemented in React',
      appContainer: 'root',
      template: 'bin/templates/prop.html'
    })
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['babel'], include: path.join(__dirname, 'src') },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[hash:base64:5]!postcss-loader') }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  postcss: [
    require('autoprefixer'),
    require('postcss-nested')
  ]
};
