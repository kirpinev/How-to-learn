module.exports = {
  '**/*.ts?(x)': () => 'npm run type-check',
  '**/*.(ts|js)?(x)': (filenames) => `npm run lint:ts ${filenames.join(' ')}`,
  './src/**/*.js': (filenames) => `npm run lint:css ${filenames.join(' ')}`,
  './src/**/*.test.ts?(x)': (filenames) =>
    `npm run test ${filenames.join(' ')}`,
}
