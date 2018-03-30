/**
 * Get an update style actions from plot.ly styles we wanted to update
 * @param {any} styleUpdates styles we wanted to update
 * @param {any} trace traces we wanted to update
 * @returns {any} update style actions
 */
function updateStyles(styleUpdates, trace) {
  if (trace && trace.length > 0) {
    return [
      {
        action: 'updateStyle',
        value: styleUpdates,
        trace,
      },
    ];
  }
  return [
    {
      action: 'updateStyle',
      value: styleUpdates,
    },
  ];
}

/**
 * Get an update style actions from plot.ly style we wanted to update
 * @param {string} name style name we wanted to update
 * @param {any} value style value we wanted to update to
 * @param {any} trace traces we wanted to update
 * @returns {any} update style actions
 */
function updateOneStyle(name, value, trace) {
  const valueResult = {};
  valueResult[name] = value;
  return updateStyles(valueResult, trace);
}

/**
 * Get an update layout actions from plot.ly layouts we wanted to update
 * @param {any} layoutUpdates layouts we wanted to update
 * @returns {any} update layout actions
 */
function updateLayouts(layoutUpdates) {
  return [
    {
      action: 'updateLayout',
      value: layoutUpdates,
    },
  ];
}

/**
 * Get an update layout actions from plot.ly layout we wanted to update
 * @param {string} name layout name we wanted to update
 * @param {any} value layout value we wanted to update to
 * @returns {any} update layout actions
 */
function updateOneLayout(name, value) {
  const valueResult = {};
  valueResult[name] = value;
  return updateLayouts(valueResult);
}

module.exports = {
  updateStyles,
  updateOneStyle,
  updateLayouts,
  updateOneLayout,
};
