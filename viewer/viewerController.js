const path = require('path');

function htmlFile(req, res) {
  return res.sendFile(path.resolve('viewer/viewer.html'));
}

function jsFile(req, res) {
  return res.sendFile(path.resolve('viewer/viewer.js'));
}

module.exports = {
  htmlFile,
  jsFile,
};
