const baseConfig = require('./jest-base');

module.exports = {
  ...baseConfig,
  roots: ['<rootDir>/integration'],
  testRegex: '.*\\.integration-spec\\.ts$',
};
