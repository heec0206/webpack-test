const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode : 'development',
    entry : {
      app : './src/js/user/app.js',
      //classApp : './src/js/classroom/classApp.js'
    },
    devServer: {
      port : 8088,
      overlay: true
    },
    devtool: 'inline-source-map',
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
          test: /\.scss$/,
          exclude: /node_modules/,
          use : [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
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
        //filename : 'sub01.html',
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({ filename : './apps.css'}),
    ]
}
