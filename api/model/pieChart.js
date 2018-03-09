function showAbsoluteValues() {
  const update = {
    textinfo: 'value',
  };
  return [{action: "updateStyle", value: update}];
}

function showPercentageValues() {
  const update = {
    textinfo: 'percent',
  };
  return [{action: "updateStyle", value: update}];
}

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
    result[i] = {action: "updateStyle", value: updates[i], trace: i};
  }
  return result;
}

module.exports = { showAbsoluteValues, showPercentageValues, updateColors };
