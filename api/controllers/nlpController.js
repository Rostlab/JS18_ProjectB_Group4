const ChartHelper = require('../helpers/chartHelper');
const environment = require('../helpers/environment');
const PieChart = require('../functions/pieChart');

function postRequest(req, res) {
  const chartType = ChartHelper.getChartType(req.body.data);

  return res.status(200).json({});
}

module.exports = {
  postRequest,
};
