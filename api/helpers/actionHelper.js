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

function updateOneStyle(name, value, trace) {
  const valueResult = {};
  valueResult[name] = value;
  return updateStyles(valueResult, trace);
}

function updateLayouts(layoutUpdates) {
  return [
    {
      action: 'updateLayout',
      value: layoutUpdates,
    },
  ];
}

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
