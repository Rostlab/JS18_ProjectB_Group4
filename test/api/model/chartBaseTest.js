const { expect } = require('chai');
const ChartBaseTest = require('./../../../api/model/chartBase');

describe('model.chartBase', () => {
  it('should create chartBase object', () => {
    const layout = {
      title: 'Some Title',
    };
    const target = new ChartBaseTest(layout);

    expect(target.layout).to.deep.equal(layout);
  });

  it('should update title in chart', () => {
    const layout = {
      title: 'Some Title',
    };
    const target = new ChartBaseTest(layout);
    const expectedTitle = 'Another Title';

    target.updateTitle(expectedTitle);

    expect(target.layout.title).to.equal(expectedTitle);
  });
});
