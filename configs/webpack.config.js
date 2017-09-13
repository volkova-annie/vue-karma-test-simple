const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isDev = !process || process.env.NODE_ENV !== 'production';

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

let localIdentName = '[local]__[hash:base64:8]'

if (!isDev) {
  localIdentName = '[hash:base64:8]'
}

module.exports = {
  entry: {app: './src/index.js'},
  output: {
    filename: '[name].js',
    path: path.resolve(process.cwd(), 'static')
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
         options: {
          loaders: {
            js: 'babel-loader',
            css: ExtractTextPlugin.extract({
              use: 'css-loader',
              fallback: 'vue-style-loader'
            })
          }
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use:  'file-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
           {
             loader: 'css-loader',
             options: {
               importLoaders: 1,
               modules: true,
               localIdentName: localIdentName
             }
           },
           {
             loader:'postcss-loader',
             options: {
               config: {
                 path: path.resolve(process.cwd(), 'postcss.config.js')
               },
               sourceMap: 'inline'
             }
           }
          ]
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Vue-karma-simple',
    }),
    new CleanWebpackPlugin(['static']),
    new ExtractTextPlugin({
      filename: '[name].css',
      disable: false,
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.ProvidePlugin({
      Vue: ['vue/dist/vue.esm.js', 'default']
})
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
     'vue$': 'vue/dist/vue.esm.js',
     '@': resolve('src')
    }
  }
};
