const lint = require('mocha-eslint');

const paths = [
  '**/**/*.js',
  '!node_modules/**/**/*.js',
];

const options = {
  // Specify style of output
  // Defaults to `stylish`
  formatter: 'stylish',

  // Only display warnings if a test is failing
  // Defaults to `true`, always show warnings
  alwaysWarn: false,

  // Increase the timeout of the test if linting takes to long
  // Defaults to the global mocha `timeout` option
  timeout: 5000,

  // Increase the time until a test is marked as slow
  // Defaults to the global mocha `slow` option
  slow: 1000,

  // Consider linting warnings as errors and return failure
  // Defaults to `false`, only notify the warnings
  strict: false,

  // Specify the mocha context in which to run tests
  // Defaults to `eslint`, but can be any string
  contextName: 'eslint',
};

lint(paths, options);
