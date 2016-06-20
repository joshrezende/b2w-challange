var debug = process.env.NODE_ENV !== 'production';
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname + '/src',
    devtool: debug ? 'inline-sourcemap' : null,
    // entry: './js/client.js',
    entry: [
      'webpack-hot-middleware/client?reload=true',
      path.join(__dirname, 'src/js/client.js')
    ],
    module: {
      loaders: [
        {
          test: /\.js?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
            presets: ['react','es2015', 'stage-0'],
            plugins: ['react-html-attrs','transform-class-properties','transform-decorators-legacy']
          }
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('css!sass')
        }
      ]
    },
    // sassLoader: {
    //   includePaths: [path.resolve(__dirname, "./styles")]
    // },
    // output: {
    //     path: __dirname + '/src/',
    //     filename: 'client.min.js'
    // },
    output: {
      path: path.join(__dirname, '/src/'),
      filename: '[name].js',
      publicPath: '/'
    },
    plugins: debug ? [
      new HtmlWebpackPlugin({
        template: 'index.tpl.html',
        inject: 'body',
        filename: 'index.html'
      }),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
      }),
      new ExtractTextPlugin('css/style.css', {
        allChunks: true
      })
    ] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),
    ],
};
