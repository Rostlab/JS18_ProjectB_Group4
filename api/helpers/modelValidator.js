const environment = require('./environment');

function isHistogram(data) {
  return data.type === environment.histogramString;
}

function isBarChart(data) {
  return data.type === environment.barChartString;
}

function isLineChart(data) {
  return data.type === environment.scatterChartString;
}

function isPieChart(data) {
  return data.type === environment.pieChartString;
}

function isScatterChart(data) {
  return data.type === environment.scatterChartString;
}

module.exports = {
  getChartType(data) {
    if (isHistogram(data)) {
      return environment.histogramString;
    }
    if (isBarChart(data)) {
      return environment.barChartString;
    }
    if (isLineChart(data)) {
      return environment.scatterChartString;
    }
    if (isPieChart(data)) {
      return environment.pieChartString;
    }
    if (isScatterChart(data)) {
      return environment.scatterChartString;
    }
    return null;
  },
};
