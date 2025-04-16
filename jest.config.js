module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: [
      '**/tests/**/*.test.ts',
      '**/*.spec.ts',
    ],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1'
    },

    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['text-summary', 'lcov'],
  
    transform: {
      '^.+\\.ts$': 'ts-jest'
    }
  };