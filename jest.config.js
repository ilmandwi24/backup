export default {
  verbose: true,
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '@config/(.*)': '<rootDir>/config/$1',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@containers/(.*)': '<rootDir>/src/containers/$1',
    '@domain/(.*)': '<rootDir>/src/domain/$1',
    '@languages/(.*)': '<rootDir>/src/languages/$1',
    '@layouts/(.*)': '<rootDir>/src/layouts/$1',
    '@pages/(.*)': '<rootDir>/src/pages/$1',
    '@routes/(.*)': '<rootDir>/src/routes/$1',
    '@static/(.*)': '<rootDir>/src/static/$1',
    '@styles/(.*)': '<rootDir>/src/styles/$1',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '.+\\.(png|jpg|ttf|woff|woff2)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['config', 'src/i18n', 'src/utils/request.js'],
};
