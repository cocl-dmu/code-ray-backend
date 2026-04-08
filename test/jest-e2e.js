const baseConfig = require('./jest-base');

module.exports = {
  ...baseConfig,
  roots: ['<rootDir>/e2e'],
  testRegex: '.*\\.e2e-spec\\.ts$',
};
