const ChartHelper = require('../helpers/chartHelper');
const NLP = require('../nlp/nlp');

/**
 * Function hook for POST /api/nlp
 * @param {*} req Express request object
 * @param {*} res Express response object
 * @returns {*} Express response object
 */
function postRequest(req, res) {
  if (!req.body.sentence) {
    return res.status(400).json({ message: 'No sentence provided' });
  }
  if (!req.body.data) {
    return res.status(400).json({ message: 'No data provided' });
  }
  if (!req.body.layout) {
    return res.status(400).json({ message: 'No layout provided' });
  }
  if (typeof req.body.sentence !== 'string') {
    return res.status(400).json({ message: 'Wrong sentence format' });
  }
  if (!Array.isArray(req.body.data)) {
    return res.status(400).json({ message: 'Wrong data format' });
  }
  if (typeof req.body.layout !== 'object' || Array.isArray(req.body.layout)) {
    return res.status(400).json({ message: 'Wrong layout format' });
  }

  const chartType = ChartHelper.getChartType(req.body.data);

  if (!chartType) {
    return res.status(400).json({ message: 'Wrong data format: can not detect or invalid chart type' });
  }

  let actions = null;

  try {
    actions = NLP.getActions(req.body.sentence, chartType, req.body.data, req.body.layout);
  } catch (error) {
    return res.status(400).json({ message: `Can not do what you asked: ${error.message}` });
  }

  if (actions === null) {
    return res.status(400).json({ message: 'Unrecognized sentence' });
  }

  return res.status(200).json(actions);
}

module.exports = {
  postRequest,
};
