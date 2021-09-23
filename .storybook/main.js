module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    {
      name: "@storybook/addon-storysource",
      loaderOptions: {
        prettierConfig: {
          arrowParens: 'always',
          printWidth: 120,
          tabWidth: 2,
          useTabs: false,
          semi: true,
          singleQuote: true,
          trailingComma: 'all',
          bracketSpacing: true,
          jsxBracketSameLine: false,
        },
      }
    },
    {
      name: '@storybook/addon-docs',
      options: { configureJSX: true },
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
