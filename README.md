# Mdh Design System Storybook TypeScript React👁

My Design System with Storybook🤟💀🤟

- TypeScript
- React
- Storybook
- mdx
- Jest
- Enzyme

# Get started🏄🏽‍♀️

```bash
# Install all
yarn install

# start
yarn storybook
```

# REFERENCE🤸🏼‍♀️

## Story Book

1. Setup React project (custom)

2. Setting up Storybook

```bash
npx -p @storybook/cli sb init --story-format=csf-ts
yarn add @storybook/addon-docs @storybook/preset-scss -D
```

## React Project Installation

```bash
# (1) Install TypeScript & React
yarn add typescript react react-dom react-router-dom react-redux
npm yarn add @types/react @types/react-dom @types/react-router-dom @types/react-redux -D

# (2) Install Redux and Thunk
yarn add redux redux-thunk
yarn add @types/react-redux @types/redux -D

# (3) Install tslint
yarn add tslint -D

# (4) Install webpack & its dependencies
yarn add webpack webpack-cli webpack-dev-server extract-text-webpack-plugin html-webpack-plugin copy-webpack-plugin terser-webpack-plugin mini-css-extract-plugin style-loader ts-loader source-map-loader sass-loader css-loader file-loader postcss-loader sass -D

# (5) Jest and Enzyme
yarn add jest ts-jest enzyme enzyme-adapter-react-16 @types/jest @types/enzyme @types/enzyme-adapter-react-16 redux-mock-store @types/redux-mock-store -D
```