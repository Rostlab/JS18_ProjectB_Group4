const { expect } = require('chai');
const PieChart = require('../../../api/functions/pieChart');

describe('api.fuctions.pieChart', () => {
  it('should return an updateStyle action where textinfo is percent on showPercentageValues()', () => {
    const target = PieChart.showPercentageValues();

    expect(target).to.deep.equal([
      {
        action: 'updateStyle',
        value: {
          textinfo: 'percent',
        },
      },
    ]);
  });

  it('should return an updateStyle action where textinfo is value on showAbsoluteValues()', () => {
    const target = PieChart.showAbsoluteValues();

    expect(target).to.deep.equal([
      {
        action: 'updateStyle',
        value: {
          textinfo: 'value',
        },
      },
    ]);
  });

  it('should return updateStyle actions with corresponding marker color on updateupdateColors(data, labels, colors)', () => {
    const data = [
      {
        values: [19, 26, 55],
        labels: ['Residential', 'Non-Residential', 'Utility'],
        type: 'pie',
        marker: {
          colors: ['red', 'green', 'blue'],
        },
      },
    ];
    const newColor = ['green', 'blue', 'red'];
    const target = PieChart.updateColors(data, data[0].labels, newColor);

    expect(target).to.deep.equal([
      {
        action: 'updateStyle',
        value: {
          marker: {
            colors: ['green', 'blue', 'red'],
          },
        },
        trace: 0,
      },
    ]);
  });
});
