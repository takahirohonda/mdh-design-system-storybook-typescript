/* eslint-disable import/no-extraneous-dependencies */
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import renameNodeModules from 'rollup-plugin-rename-node-modules';
import rename from 'rollup-plugin-rename';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { visualizer } from 'rollup-plugin-visualizer';

import pkg from './package.json';

/**
 * The build currently includes node_modules: https://github.com/rollup/rollup/issues/3684
 * isolateModules can't tell that node_modules is special, and postcss auto includes a module to inject styles
 * we include a vendor dir for this included module to ensure it gets included
 */

const nodeModulePlugins = [
  renameNodeModules('vendor'),
  rename({
    include: ['**/*.js'],
    // find node module and place it in the vendor directory
    map: (name) => name.replace('node_modules', 'vendor').replace('../../vendor', '../vendor'),
  }),
];

/**
 * TODO: Fix tree shaking
 * Unless you import via the explicit path, it imports all the styles in the library
 * So the compiled build for a react app goes up to 2.9M, when it could be 660kb
 */

export default {
  input: ['./src/index.ts'],
  output: [
    {
      dir: 'dist',
      format: 'esm',
      sourcemap: false,
      preserveModules: true,
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    'react-select/async', // rollup can't tell that this is a node_module
  ],
  plugins: [
    typescript({
      sourceMap: false,
      exclude: ['**/*.(test|spec).(ts|tsx)'], // don't generate *.d.ts files
    }),
    resolve(),
    commonjs(),
    postcss({
      modules: true,
    }),
    ...nodeModulePlugins,
    Boolean(process.env.ANALYZE)
      && visualizer({
        filename: 'stats.html',
        template: 'treemap',
        open: true,
      }),
  ],
};
