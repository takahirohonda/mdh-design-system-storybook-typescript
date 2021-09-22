module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    {
      name: '@storybook/addon-docs',
      options: { configureJSX: true },
    },
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    // "../src/addon/preset.js",
    {
      name: "@storybook/addon-storysource",
      loaderOptions: {
        prettierConfig: { printWidth: 80, singleQuote: false },
      }
    },
    
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /(src|styleguide).+\.scss$/,
      loaders: [
        'style-loader',
        'css-modules-typescript-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true,
          },
        },
        'sass-loader',
      ],
    });

    return config;
  },
}
