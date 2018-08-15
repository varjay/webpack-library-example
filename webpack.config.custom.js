const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path');

module.exports = {
  entry: './examples/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'webpack-numbers.js',
    libraryTarget: 'umd',
    globalObject: 'this',
    // libraryExport: 'default',
    library: 'webpackNumbers'
  },
  externals: {
    'lodash': {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    }
  },
  module: {
    rules: [{
      test: /\.(js)$/,
      exclude: /(node_modules|bower_components)/,
      use: 'babel-loader'
    },
    {
      test: /\.vue$/,
      use: 'vue-loader'
    },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "examples/public"),
    compress: true,
    hot: true,
    https: false,
    clientLogLevel: 'error'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ template: './examples/index.html' }),
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  }
}