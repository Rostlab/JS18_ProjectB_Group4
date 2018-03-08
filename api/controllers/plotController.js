const ModelValidator = require('./../helpers/modelValidator');
const environment = require('./../helpers/environment');
const PieChart = require('./../model/pieChart');

module.exports = {
  updatePlot(req, res) {
    console.log(req.params.query);
    console.log(req.body);
    const chartType = ModelValidator.getChartType(req.body);
    console.log(chartType);
    // Apply query on req.body and return updated plot data,
    return res.status(200).json(req.body);
  },
};

function parseHistogramQuery(query, data) {
  return data;
}

function parseBarChartQuery(query, data) {
  return data;
}

function parseLineChartQuery(query, data) {
  return data;
}

function parsePieQuery(query, data) {
  // These are just placeholders, will change them when we will have nlp,
  if (query === 'showPercentage') {
    return PieChart.showPercentageValues();
  } else if (query === 'showAbsoluteValues') {
    return PieChart.showAbsoluteValues();
  } else if (query === 'udpdateColors') {
    return PieChart.updateColors(data, data.labels, data.marker.colors);
  }
  return data;
}

function parseScatterChatQuery(query, data) {
  return data;
}

function parseQuery(query, chartType, data) {
  if (chartType === environment.histogramString) {
    return parseHistogramQuery(query, data);
  }
  if (chartType === environment.barChartString) {
    return parseBarChartQuery(query, data);
  }
  if (chartType === environment.scatterChartString) {
    return parseLineChartQuery(query, data);
  }
  if (chartType === environment.pieChartString) {
    return parsePieQuery(query, data);
  }
  if (chartType === environment.scatterChartString) {
    return parseScatterChatQuery(query, data);
  }
  return data;
}
