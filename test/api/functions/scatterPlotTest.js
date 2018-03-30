const { expect } = require('chai');
const ScatterPlot = require('../../../api/functions/scatterPlot');

describe('api.fuctions.scatterPlot', () => {
  it('should return an updateStyle action on changeMarkerSymbol(symbol, trace)', () => {
    const target = ScatterPlot.changeMarkerSymbol('star');

    expect(target).to.deep.equal([
      {
        action: 'updateStyle',
        value: {
          'marker.symbol': 'star',
        },
      },
    ]);
  });

  it('should return an updateStyle action on changeMarkerSize(size, trace)', () => {
    const target = ScatterPlot.changeMarkerSize(5);

    expect(target).to.deep.equal([
      {
        action: 'updateStyle',
        value: {
          'marker.size': 5,
        },
      },
    ]);
  });

  it('should return an updateStyle action on changeMarkerSizeBy(data, multiplier, trace)', () => {
    const data = [{}];
    const target = ScatterPlot.changeMarkerSizeBy(data, 1.5);

    expect(target).to.deep.equal([
      {
        action: 'updateStyle',
        value: {
          'marker.size': 9,
        },
      },
    ]);
  });

  it('should return an updateStyle action on changeMarkerColor(color, trace)', () => {
    const target = ScatterPlot.changeMarkerColor('red');

    expect(target).to.deep.equal([
      {
        action: 'updateStyle',
        value: {
          'marker.color': 'red',
        },
      },
    ]);
  });

  it('should return an updateStyle action on changeLineDash(dash, trace)', () => {
    const target = ScatterPlot.changeLineDash('dash');

    expect(target).to.deep.equal([
      {
        action: 'updateStyle',
        value: {
          'line.dash': 'dash',
        },
      },
    ]);
  });
});
