const { expect } = require('chai');
const PieChart = require('./../../../api/model/pieChart');

describe('model.pieChart', () => {
  it('should create pieChart object', () => {
    const data = [{
      values: [19, 26, 55],
      labels: ['Residential', 'Non-Residential', 'Utility'],
      type: 'pie',
      marker: {
        colors: ['red', 'green', 'blue'],
      },
    }];
    const layout = {
      height: 400,
      width: 500,
    };
    const target = new PieChart(data, layout);

    expect(target.data[0].type).to.equal('pie');
    expect(target.data.length).to.equal(1);
    expect(target.getData()).to.deep.equal(data);
    expect(target.getLayout()).to.deep.equal(layout);
  });

  it('should use percentage in chart', () => {
    const data = [{
      values: [5, 5, 10],
      labels: ['Residential', 'Non-Residential', 'Utility'],
      type: 'pie',
      marker: {
        colors: ['red', 'green', 'blue'],
      },
    }];
    const layout = {
      height: 400,
      width: 500,
    };
    const target = new PieChart(data, layout);

    const expectedData = [{
      values: [25, 25, 50],
      labels: ['Residential', 'Non-Residential', 'Utility'],
      type: 'pie',
      marker: {
        colors: ['red', 'green', 'blue'],
      },
    }];

    expect(target.getData()).to.deep.equal(expectedData);
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
    const layout = {
      height: 400,
      width: 500,
    };
    const expectedColor = 'orange';
    const target = new PieChart(data, layout);

    target.updateColor('Utility', expectedColor);
    console.log('before');
    expect(target.getData()[0].marker.colors[2]).to.equal(expectedColor);
    console.log('after');
  });
});
