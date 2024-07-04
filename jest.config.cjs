module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.cjs'],
  setupFilesAfterEnv: ["./setupTests.cjs"],
  transformIgnorePatterns: ['/node_modules/(?!query-string)/'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/tests/mocks/styleMock.js',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '^.+\\.js$': 'esbuild-jest-transform',
  },
  testTimeout: 10000,
};