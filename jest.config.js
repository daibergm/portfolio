function makeModuleNameMapper(srcPath, tsconfigPath) {
  // Get paths from tsconfig
  const { paths } = require(tsconfigPath).compilerOptions;

  const aliases = {};

  // Iterate over paths and convert them into moduleNameMapper format
  Object.keys(paths).forEach((item) => {
    const key = item.replace('/*', '/(.*)');
    const path = paths[item][0].replace('/*', '/$1').replace('./src/', '');
    aliases[key] = srcPath + '/' + path;
  });
  return aliases;
}

const TS_CONFIG_PATH = './tsconfig.json';
const SRC_PATH = '<rootDir>/src';

module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/node_modules/',
    '!<rootDir>/path/to/dir/',
    '!<rootDir>/src/pages/_app.tsx',
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    }
  },
  coverageReporters: [
    'lcov',
    'text',
  ],
  roots: [
    SRC_PATH,
  ],
  moduleNameMapper: makeModuleNameMapper(SRC_PATH, TS_CONFIG_PATH),
};
