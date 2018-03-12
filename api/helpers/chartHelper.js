const environment = require('./environment');

function getChartType(data) {
  if (!data || data.length === 0) {
    return null;
  }
  const [firstTrace] = data;
  if (environment.chartType.indexOf(firstTrace.type) > -1) {
    return firstTrace.type;
  }
  return null;
}

module.exports = {
  getChartType,
};
