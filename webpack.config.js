const path = require('path')
const devMode = process.env.NODE_ENV !== 'production';

const cssLoader = {
  loader: 'css-loader',
  options: {
    importLoaders: 1,
  },
};

module.exports = (env, argv) => {
  return {
    mode: argv.mode || 'development',
    entry: {
      main: './src/index.ts',
      // can have multiple entry
      // register: './src/register/Index.tsx'
    },
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, '/dist')
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader',
            },
          ],
        },
        {
          test: /\.css$/,
          use: ['style-loader', cssLoader],
        },
        {
          test: /(stories).+\.scss$/,
          loaders: [
            'style-loader',
            'css-modules-typescript-loader',
            {
              ...cssLoader,
              options: {
                modules: true
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /img.+\.svg$/,
          loader: 'svg-inline-loader?classPrefix',
        },
        {
          test: /fonts.+\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          }],
        },
      ]
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
    },
  }
}