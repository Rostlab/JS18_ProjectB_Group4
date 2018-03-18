/**
 * Shows absolute values in a pie chart.
 * @returns {any} Updated layout for the chart.
 */
function showAbsoluteValues() {
  const update = {
    textinfo: 'value',
  };
  return [{ action: 'updateStyle', value: update }];
}

/**
 * Shows percentage in a pie chart.
 * @returns {any} Updated layout for the chart.
 */
function showPercentageValues() {
  const update = {
    textinfo: 'percent',
  };
  return [{ action: 'updateStyle', value: update }];
}

/**
 * Updates colors for the given labels in the pie chart.
 * @param {any} data Data of the pie chart.
 * @param {any} labels Labels of the pie chart.
 * @param {any} colors New colors for the pie chart.
 * @returns {any} Updated layout for the chart.
 */
function updateColors(data, labels, colors) {
  const updates = new Array(data.length);
  for (let i = 0; i < data.length; i++) {
    updates[i] = {};
    updates[i].marker = data[i].marker;
    for (let j = 0; j < data[i].labels.length; j++) {
      for (let k = 0; k < labels.length; k++) {
        if (data[i].labels[j] === labels[k]) {
          updates[i].marker.colors[j] = colors[k];
        }
      }
    }
  }
  const result = new Array(updates.length);
  for (let i = 0; i < updates.length; i++) {
    result[i] = { action: 'updateStyle', value: updates[i], trace: i };
  }
  return result;
}

module.exports = { showAbsoluteValues, showPercentageValues, updateColors };
