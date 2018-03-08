function showAbsoluteValues() {
  const update = {
    textinfo: 'value',
  };
  return update;
}

function showPercentageValues() {
  const update = {
    textinfo: 'percent',
  };
  return update;
}

function updateColors(data, labels, colors) {
  const result = new Array(data.length);
  for (let i = 0; i < data.length; i++) {
    result[i] = {};
    result[i].marker = data[i].marker;
    for (let j = 0; j < data[i].labels.length; j++) {
      for (let k = 0; k < labels.length; k++) {
        if (data[i].labels[j] === labels[k]) {
          result[i].marker.colors[j] = colors[k];
        }
      }
    }
  }
  return result;
}

module.exports = { showAbsoluteValues, showPercentageValues, updateColors };
