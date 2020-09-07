const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode : 'development',
    entry : {
      main : './src/app.js'
    },
    output : {
      path : path.resolve('./dist'),
      filename : '[name].js',
    },
    module : {
      rules : [
        {
          test : /\.css$/,
          use : ['style-loader', 'css-loader']
        },
        {
          test : /\.png$/,
          use : [{
            loader : 'file-loader',
            options : {
              //publicPath : './dist'
              name : '[name].[ext]?[hash]'
            }
          }]
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread']
            }
          }
        }
      ]
    },
    plugins : [
      new HtmlWebpackPlugin({
        template : './src/index.html',
      }),
      new CleanWebpackPlugin(),
    ]
}
