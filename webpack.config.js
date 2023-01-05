var path = require('path');

module.exports = {
  entry: './frontend/index/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(`${__dirname}/public/javascripts`)
  }
};
