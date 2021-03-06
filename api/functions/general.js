const actionHelper = require('../helpers/actionHelper');

/**
 * Changes the title of the chart.
 * @param {any} title New title for the chart.
 * @returns {any} Updated layout of the chart.
 */
function changeTitle(title) {
  return actionHelper.updateOneLayout('title', title);
}

/**
 * Hides legend in the chart.
 * @returns {any} Updated layout of the chart.
 */
function hideLegend() {
  return actionHelper.updateOneLayout('showlegend', false);
}

/**
 * Shows legend in the chart.
 * @returns {any} Updated layout of the chart.
 */
function showLegend() {
  return actionHelper.updateOneLayout('showlegend', true);
}

/**
 * Hides gridline of some axis.
 * @param {string} axis Name of the axis (x/y/z).
 * @returns {any} Updated layout of the chart.
 */
function hideGridline(axis) {
  const axisName = `${axis}axis`;
  const update = {};
  update.showgrid = false;
  return actionHelper.updateOneLayout(axisName, update);
}

/**
 * Shows gridline of some axis.
 * @param {string} axis Name of the axis (x/y/z).
 * @returns {any} Updated layout of the chart.
 */
function showGridline(axis) {
  const axisName = `${axis}axis`;
  const update = {};
  update.showgrid = true;
  return actionHelper.updateOneLayout(axisName, update);
}

/**
 * Updates the legend position in the chart.
 * @param {number} x New x position of the legend (0-1)
 * @param {number} y New y position of the legend (0-1)
 * @returns {any} Updated layout of the chart.
 */
function changeLegendPosition(x, y) {
  const update = {};
  update.x = x;
  update.y = y;
  return actionHelper.updateOneLayout('legend', update);
}

/**
 * Updates the legend font size in the chart.
 * @param {number} size New font size of the legend.
 * @returns {any} Updated layout of the chart.
 */
function changeLegendSize(size) {
  const update = {};
  const font = {};
  font.size = size;
  update.font = font;
  return actionHelper.updateOneLayout('legend', update);
}

/**
 * Updates the axis title in the chart.
 * @param {string} axis Name of the axis (x/y/z).
 * @param {string} title New title of the axis.
 * @returns {any} Updated layout of the chart.
 */
function changeAxisTitle(axis, title) {
  const axisName = `${axis}axis`;
  const update = {};
  update.title = title;
  return actionHelper.updateOneLayout(axisName, update);
}

/**
 * Updates the axis range in the chart.
 * @param {string} axis Name of the axis (x/y/z).
 * @param {any} from Start number
 * @param {any} to End number
 * @returns {any} Updated layout of the chart.
 */
function changeAxisRange(axis, from, to) {
  const axisName = `${axis}axis`;
  const update = {};
  update.range = [from, to];
  return actionHelper.updateOneLayout(axisName, update);
}

module.exports = {
  changeTitle,
  showLegend,
  hideLegend,
  hideGridline,
  showGridline,
  changeLegendPosition,
  changeLegendSize,
  changeAxisTitle,
  changeAxisRange,
};
