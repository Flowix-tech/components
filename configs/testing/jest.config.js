const path = require("path")


module.exports = {
  rootDir: path.resolve(__dirname,"..",".."),
  roots: ['<rootDir>'],
  cacheDirectory: "<rootDir>/.cache/jest",
  coverageDirectory: "<rootDir>/.coverage",
  collectCoverageFrom: [
    "<rootDir>/packages/*/src/**/*.{ts,tsx}",
    '!<rootDir>/packages/.template/**',
    '!<rootDir>/packages/*/src/**/*.stories.{ts,tsx}'
  ],
  coverageReporters: ['json-summary','text','lcov'],
  testMatch: ['<rootDir>/packages/*/src/**/?(*.)+(spec|test).[jt]s?(x)'],
  testPathIgnorePatterns: [
    '/node_modules/','<rootDir>/packages/.template'
  ],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/configs/testing/jest-setup.js'],
  modulePathIgnorePatterns: ['./node_modules'],

}
