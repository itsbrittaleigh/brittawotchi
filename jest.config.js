module.exports = {
  preset: 'jest-expo',
  testEnvironment: 'jsdom',
  transform: {},
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
