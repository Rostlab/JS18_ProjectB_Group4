const lint = require('mocha-eslint');

const paths = ['**/**/*.js', '!node_modules/**/**/*.js'];
const options = ['.eslintrc.json'];
lint(paths, options);
