module.exports = {
  roots: [
    '<rootDir>/src'
  ],
  testMatch: [
    '**/?*\\.test\\.(ts|tsx)'
  ],
  modulePaths: [],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/src/__mock__/SvgMock.tsx'
  },
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest'
  },
  transformIgnorePatterns: [
    '/node_modules/(?!@react-dnd|react-dnd|dnd-core|nanoid)'
  ],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};
