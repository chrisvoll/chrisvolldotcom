module.exports = {
  collectCoverageFrom: ['src/**/*.(ts|tsx)'],
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js'
  },
  setupFiles: ['<rootDir>/jest-loadershim.ts'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  }
};
