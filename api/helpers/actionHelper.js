
function updateStyles(styles, trace) {
  if(trace) {
    return [
      {
        action: "updateStyle",
        value: styles,
        trace,
      }
    ];
  }
  return [
    {
      action: "updateStyle",
      value: styles,
    }
  ];
}

function updateOneStyle(name, value, trace) {
  const valueResult = {};
  valueResult[name] = value;
  return updateStyles(valueResult, trace);
}

module.exports = {
  updateStyles,
  updateOneStyle,
};
