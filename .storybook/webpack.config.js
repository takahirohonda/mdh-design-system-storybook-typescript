const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = async ({ config }) => {
  // fonts
  config.plugins.push(
    new CopyWebpackPlugin({patterns: [
      { 
        from: path.resolve(__dirname, '../src/fonts/Lato'),
        to: 'fonts/Lato' 
      },
    ]}),
  );

  return config;
};
