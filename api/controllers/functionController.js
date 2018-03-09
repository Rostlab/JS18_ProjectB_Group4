const kwargs = require('kwargs');

var chartTypes = {
  'pie': require('../model/pieChart'),
  'bar': require('../model/barChart'),
  'histogram': require('../model/histogram'),
  'scatter': require('../model/scatterPlot'),
}

function postRequest(req, res) {
  if(chartTypes[req.params.chartType]) {
    if(typeof chartTypes[req.params.chartType][req.params.functionName] === "function") {
      return res.status(200).json(kwargs(chartTypes[req.params.chartType][req.params.functionName], req.body));
    }
  }
  return res.status(404).json({});
}

module.exports = {
  postRequest,
};
