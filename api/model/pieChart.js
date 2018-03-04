const ChartBase = require('./chartBase');

function getTotalEntries(array) {
  let total = 0;
  for (let i = 0; i < array.length; i += 1) {
    total += array[i];
  }
  return total;
}

class PieChart extends ChartBase {
  constructor(data, layout) {
    super(layout);
    this.data = data;
    this.percentageEnabled = true;
  }

  showPercentage() {
    this.percentageEnabled = true;
  }

  showAbsoulte() {
    this.percentageEnabled = false;
  }

  getData() {
    const result = this.data;
    if (this.percentageEnabled) {
      for (let i = 0; i < this.data.length; i += 1) {
        const total = getTotalEntries(this.data[i].values);
        for (let j = 0; j < result[i].values.length; j += 1) {
          result[i].values[j] = (result[i].values[j] * 100) / total;
        }
      }
    }
    return result;
  }

  getLayout() {
    return this.layout;
  }

  updateColor(labelName, color) {
    for (let i = 0; i < this.data.length; i += 1) {
      for (let j = 0; j < this.data[i].labels.length; j += 1) {
        if (this.data[i].labels[j] === labelName) {
          this.data[i].marker.colors[j] = color;
        }
      }
    }
  }
}

module.exports = PieChart;
