/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  roots: [
    '<rootDir>/src'
  ],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFiles: [
    '<rootDir>/__tests__/setup.ts',
  ],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1'
  }
};