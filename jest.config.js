module.exports = {
  preset: 'ts-jest/presets/js-with-babel',
  collectCoverageFrom: [
    '!app/common/utils/images.js',
    '!app/**/*.test.{js,jsx,ts,tsx}',
    '!app/*/RbGenerated*/*.{js,jsx,ts,tsx}',
    '!app/app.tsx',
    '!app/global-styles.ts',
    '!app/*/*/Loadable.{js,jsx,ts,tsx}',
    '!app/utils/reducers.ts',
    '!app/utils/redux-injectors.tsx',

    'app/**/reducers/*.{js,jsx,ts,tsx}',
    'app/**/actions/*.{js,jsx,ts,tsx}',
    'app/**/selectors/*.{js,jsx,ts,tsx}',
    'app/**/setters/*.{js,jsx,ts,tsx}',
    'app/**/hooks/*.{js,jsx,ts,tsx}',
    'app/**/utils/*.{js,jsx,ts,tsx}',
    'app/**/sagas/*.{js,jsx,ts,tsx}',

    '!app/**/reducers/index.{js,jsx,ts,tsx}',
    '!app/**/actions/index.{js,jsx,ts,tsx}',
    '!app/**/selectors/index.{js,jsx,ts,tsx}',
    '!app/**/setters/index.{js,jsx,ts,tsx}',
    '!app/**/hooks/index.{js,jsx,ts,tsx}',
    '!app/**/utils/index.{js,jsx,ts,tsx}',
    '!app/**/sagas/index.{js,jsx,ts,tsx}',

    'app/**/actions.{js,jsx,ts,tsx}',
    'app/**/reducer.{js,jsx,ts,tsx}',
    'app/**/selectors.{js,jsx,ts,tsx}',
    'app/**/setters.{js,jsx,ts,tsx}',
    'app/**/hooks.{js,jsx,ts,tsx}',
    'app/**/utils.{js,jsx,ts,tsx}',
    'app/**/saga.{js,jsx,ts,tsx}',
  ],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  moduleDirectories: ['node_modules', 'app'],
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$':
      '<rootDir>/internals/mocks/cssModule.{js,jsx,ts,tsx}',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/internals/mocks/image.{js,jsx,ts,tsx}',
  },
  setupFilesAfterEnv: [
    '<rootDir>/internals/testing/test-bundler.js',
    '@testing-library/jest-dom/extend-expect',
  ],
  testRegex: 'tests/.*\\.test\\.(js|ts(x?))$',
  transform: {
    '^.+\\.(ts(x?)|js)$': 'ts-jest',
  },
  snapshotSerializers: [],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
}
