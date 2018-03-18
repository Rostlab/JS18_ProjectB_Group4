const { expect } = require('chai');
const General = require('../../../api/functions/general');

describe('api.model.general', () => {
  it('should return an updateLayout action on changeTitle(title)', () => {
    const newTitle = 'Test title';

    const target = General.changeTitle(newTitle);

    expect(target).to.deep.equal([
      {
        action: 'updateLayout',
        value: {
          title: newTitle,
        },
      },
    ]);
  });

  it('should return an updateLayout action on showLegend()', () => {
    const target = General.showLegend();

    expect(target).to.deep.equal([
      {
        action: 'updateLayout',
        value: {
          showlegend: true,
        },
      },
    ]);
  });

  it('should return an updateLayout action on hideLegend()', () => {
    const target = General.hideLegend();

    expect(target).to.deep.equal([
      {
        action: 'updateLayout',
        value: {
          showlegend: false,
        },
      },
    ]);
  });

  it('should return an updateLayout action on changeLegendPosition(x, y)', () => {
    const target = General.changeLegendPosition(1, 0.5);

    expect(target).to.deep.equal([
      {
        action: 'updateLayout',
        value: {
          legend: {
            x: 1,
            y: 0.5,
          },
        },
      },
    ]);
  });
});
