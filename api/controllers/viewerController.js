const PieChart = require('./../api/model/pieChart');

function getUpdate(req, res) {
  if (req.query.chartType == 'pie') {
    if (req.query.operation === 'absoluteNumber') {
      return res.status(200).json(PieChart.showAbsoluteValues());
    }
    if (req.query.operation === 'percentage') {
      return res.status(200).json(PieChart.showPercentageValues());
    }
    if (req.query.operation === 'changeColors') {
      const data = JSON.parse(req.query.chartData);
      const labels = data.labels;
      const colors = ['orange', 'teal', 'lime'];
      const array = [data];
      const respon = PieChart.updateColors(array, labels, colors);
      return res.status(200).json(respon);
    }
  }
}

module.exports = {
  getUpdate,
};
