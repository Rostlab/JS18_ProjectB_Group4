const { expect } = require('chai');
const PieChart = require('./../../../api/model/pieChart');

describe('model.pieChart', () => {
  it('should return percentage in chart', () => {
    const expectedTextinfo = 'percent';

    const target = PieChart.showPercentageValues();

    expect(target.textinfo).to.deep.equal(expectedTextinfo);
  });

  it('should return absolute values in chart', () => {
    const expectedTextinfo = 'value';

    const target = PieChart.showAbsoluteValues();

    expect(target.textinfo).to.deep.equal(expectedTextinfo);
  });


  it('should update color of a label', () => {
    const data = [{
      values: [19, 26, 55],
      labels: ['Residential', 'Non-Residential', 'Utility'],
      type: 'pie',
      marker: {
        colors: ['red', 'green', 'blue'],
      },
    }];
    const expectedColors = ['green', 'blue', 'red'];
    const target = PieChart.updateColors(data, data[0].labels, expectedColors);

    console.log(target);
    expect(target[0].marker.colors).to.deep.equal(expectedColors);
  });
});
