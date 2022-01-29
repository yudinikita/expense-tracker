/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

const config = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  transform: {
    '\\.js$': ['babel-jest', { configFile: './babel-jest.config.cjs' }],
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  modulePathIgnorePatterns: ['src'],
}

module.exports = config
