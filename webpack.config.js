const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const devMode = process.env.NODE_ENV !== 'production';

module.exports = (env, argv) => {
  return {
    mode: argv.mode || 'development',
    entry: {
      // main: './src/quick-example/Index.tsx',
      main: './src/Index.tsx',
      // can have multiple entry
      // register: './src/register/Index.tsx'
    },
    output: {
      filename: '[name]-react.js',
      path: path.join(__dirname, '/dist')
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
    devServer: {
      inline: true,
      contentBase: './public',
      historyApiFallback: true,
      port: 3002
    },
    devtool: false,
    optimization: {
      minimizer: [
        //
        new TerserPlugin({
          parallel: true,
          sourceMap: true, // Must be set to true if using source-maps in production
          exclude: /\.(min)\.(js)$/i,
          terserOptions: {
            // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
            // using default options
          }
        })
      ]
    },
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: process.env.NODE_ENV === 'development',
                reloadAll: true,
              },
            },
            'css-loader',
            {
              loader: `postcss-loader`,
              options: {
                  options: {},
              }
          },
            'sass-loader',
          ],
        },
        {
          test: /\.[tj]sx?$/,
          exclude: /node_modules/,
          loader: 'ts-loader'
        },
        {
          test: /\.svg$/,
          loader: 'file-loader'
        },
        {
          test: /\.woff$/,
          loader: 'url-loader'
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './public/index.html',
        filename: 'index.html'
      }),
      // new CopyWebpackPlugin({
      //   patterns: [
      //     {
      //       from: './public/font/*',
      //       to: './dist/font'
      //     }
      //   ]
      // }),
      new MiniCssExtractPlugin({
        filename: 'react.style.min.css', // devMode ? '[name].css' : '[name].[hash].css',
        chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
      }),
    ]
  }
}