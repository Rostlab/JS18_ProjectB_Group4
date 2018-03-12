const kwargs = require('kwargs');
const pie = require('../model/pieChart');
const bar = require('../model/barChart');
const histogram = require('../model/histogram');
const scatter = require('../model/scatterPlot');

const chartTypes = {
  pie,
  bar,
  histogram,
  scatter,
};

function postRequest(req, res) {
  if (chartTypes[req.params.chartType]) {
    if (typeof chartTypes[req.params.chartType][req.params.functionName] === 'function') {
      return res
        .status(200)
        .json(kwargs(chartTypes[req.params.chartType][req.params.functionName], req.body));
    }
  }
  return res.status(404).json({});
}

module.exports = {
  postRequest,
};
