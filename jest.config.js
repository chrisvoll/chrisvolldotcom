module.exports = {
  collectCoverageFrom: ['src/**/*.js'],
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js'
  },
  setupFiles: ['<rootDir>/jest-loadershim.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transform: {
    '^.+\\.jsx?$': '<rootDir>/jest-preprocess.js'
  }
};
