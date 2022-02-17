# Mdh Design System with Storybook👁

Mdh Design System with Storybook🤟💀🤟

- TypeScript
- React
- Storybook
- Jest
- Enzyme

# Get started🏄🏽‍♀️

```bash
# Install all
yarn install

# start
yarn storybook

# run unit test
yarn test
yarn test:watch
```

# Build

```bash
# build bundle
yarn build

# build release bundle
yarn build:package

# build storybook
yarn build-storybook
```

# Deploy Storybook

Commit to master will trigger Github actions to push the artifacts to the Git Page repo.

# Release Process

It will release a new node module upon merging to master by `semantic-release`.

```bash
git add .
yarn commit
```
