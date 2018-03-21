const ChartHelper = require('../helpers/chartHelper');
const NLP = require('../nlp/nlp');

/**
 * Function hook for POST /api/nlp
 * @param {*} req Express request object
 * @param {*} res Express response object
 * @returns {*} Express response object
 */
function postRequest(req, res) {
  const chartType = ChartHelper.getChartType(req.body.data);

  const actions = NLP.getActions(req.body.sentence, chartType, req.body.data, req.body.layout);

  if (actions === null) {
    return res.status(400).json({});
  }

  return res.status(200).json(actions);
}

module.exports = {
  postRequest,
};
