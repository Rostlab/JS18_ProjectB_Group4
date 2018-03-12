const { expect } = require('chai');
const BarChart = require('../../../api/functions/barChart');

describe('api.fuctions.barChart', () => {
  it('should return an updateLayout action on changeCategoryOrder(layout, categoryArray, axis)', () => {
    const layout = {
      xaxis: {
        type: 'category',
      },
    };

    const newOrder = ['a', 'bb', 'ccc'];

    const target = BarChart.changeCategoryOrder(layout, newOrder);

    expect(target).to.deep.equal([
      {
        action: 'updateLayout',
        value: {
          'xaxis.categoryarray': newOrder,
        },
      },
    ]);
  });
});
