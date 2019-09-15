module.exports = {
  collectCoverageFrom: ['src/**/*.js'],
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.js$': '<rootDir>/jest.transform.js'
  },
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js'
  },
  setupFiles: ['<rootDir>/__mocks__/setupFiles.js'],
  snapshotSerializers: ['enzyme-to-json/serializer']
};
