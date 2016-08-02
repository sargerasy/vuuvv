var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  module: {
    loaders: [{
      test: /\.ts$/,
      loaders: ['ts', 'angular2-template-loader']
    }, {
      test: /\.html$/,
      loader: 'html',
    }, {
      test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
      loader: 'file?name=assets/[name].[hash].[ext]'
    }, {
      test: /\.css$/,
      exclude: [
        helpers.root('src', 'app'),
        helpers.root('src', 'components')
      ],
      loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
    }, {
      test: /\.css$/,
      include: [
        helpers.root('src', 'app'),
        helpers.root('src', 'components')
      ],
      loader: 'raw!postcss'
    }, {
      test: /\.scss$/,
      exclude: [
        helpers.root('src', 'app'),
        helpers.root('src', 'components')
      ],
      loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss!sass')
    }, {
      test: /\.scss$/,
      include: [
        helpers.root('src', 'app'),
        helpers.root('src', 'components')
      ],
      loader: 'raw!postcss!sass'
    }],
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],

  postcss: [
    autoprefixer({browser: ['last 2 version']})
  ]
}
