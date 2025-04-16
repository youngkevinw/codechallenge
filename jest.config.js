module.exports = {
    rootDir: './',

    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/tests/**/*.test.ts'],

    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1'
    },

    collectCoverage: true,
    collectCoverageFrom: [
      'src/**/*.{js,jsx,ts,tsx}', 
      '!src/**/*.d.ts'
    ],
    coverageDirectory: 'coverage',
    coverageReporters: ['text-summary', 'lcov'],
  
    transform: {
      '^.+\\.ts$': 'ts-jest'
    }
  };