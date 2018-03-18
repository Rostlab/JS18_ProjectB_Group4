const kwargs = require('kwargs');
const general = require('../functions/general');
const pie = require('../functions/pieChart');
const bar = require('../functions/barChart');
const histogram = require('../functions/histogram');
const scatter = require('../functions/scatterPlot');

const functionFiles = {
  general,
  pie,
  bar,
  histogram,
  scatter,
};

function postRequest(req, res) {
  if (functionFiles[req.params.functionFile]) {
    if (typeof functionFiles[req.params.functionFile][req.params.functionName] === 'function') {
      return res
        .status(200)
        .json(kwargs(functionFiles[req.params.functionFile][req.params.functionName], req.body));
    }
  }
  return res.status(404).json({});
}

module.exports = {
  postRequest,
};
