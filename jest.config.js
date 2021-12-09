module.exports = {
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ['<rootDir>/src'],

  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  transform: {
    '^.+\\.(tsx|ts)?$': 'ts-jest',
  },

  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: [
    './setup.ts',

    // Todo: fix the validation error when adding this
    // Module @testing-library/react/cleanup-after-each i
    // n the setupFilesAfterEnv option was not found.
    // <rootDir> is: C:\Users\takah\Projects\whosfree-fed\react
    // '@testing-library/react/cleanup-after-each'
  ],

  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.

  // This makes importing css as module possible for unit tests
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },

  // Module file extensions for importing
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
