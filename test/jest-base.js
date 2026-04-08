const moduleNameMapper = {
  '^@app/core(|/.*)$': '<rootDir>/../libs/core/src/$1',
  '^@app/database(|/.*)$': '<rootDir>/../libs/database/src/$1',
  '^@app/integrations(|/.*)$': '<rootDir>/../libs/integrations/src/$1',
  '^@app/contracts(|/.*)$': '<rootDir>/../libs/contracts/src/$1',
  '^@app/shared(|/.*)$': '<rootDir>/../libs/shared/src/$1',
};

module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  testEnvironment: 'node',
  moduleNameMapper,
};
