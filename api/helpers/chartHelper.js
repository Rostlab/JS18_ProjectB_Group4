const environment = require('./environment');
/**
 * Returns the type of chart.
 * @param {any} data Plotly.data object
 * @returns {any} Type of chart. Returns null if invalid object.
 */
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
