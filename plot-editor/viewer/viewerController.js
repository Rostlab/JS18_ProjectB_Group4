'use strict';
var path = require('path');

module.exports = {
  htmlFile: htmlFile,
  jsFile: jsFile
};

function htmlFile(req, res) {
  return res.sendFile(path.resolve('viewer/viewer.html'));
}

function jsFile(req, res) {
  return res.sendFile(path.resolve('viewer/viewer.js'));
}
