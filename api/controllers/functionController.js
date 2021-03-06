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

/**
 * Function hook for POST /api/function/:functionFile/:functionName
 * @param {*} req Express request object
 * @param {*} res Express response object
 * @returns {*} Express response object
 */
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
