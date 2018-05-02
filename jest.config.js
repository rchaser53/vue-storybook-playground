module.exports = {
  moduleFileExtensions: ['ts', 'js', 'vue'],
  globals: {
    NODE_ENV: 'test',
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.ts$': '<rootDir>/preprocessor.js',
    '^.+\\.(vue)$': '<rootDir>/node_modules/vue-jest',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  testMatch: ['**/src/**/__tests__/*.(ts|js)'],
};