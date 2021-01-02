module.exports = {
  '**/*.ts?(x)': () => 'npm run type-check',
  '**/*.(ts|js)?(x)': (filenames) => `npm run lint:ts ${filenames.join(' ')}`,
  '*.test.(ts|js)?(x)': (filenames) => `npm run test ${filenames.join(' ')}`,
}
