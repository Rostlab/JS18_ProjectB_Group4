const { expect } = require('chai');
const ScatterPlot = require('./../../../api/model/scatterPlot');

describe('api.model.scatterPlot', () => {
  it('should return an updateStyle action on changeMarkerSymbol(symbol, trace)', () => {
    const target = ScatterPlot.changeMarkerSymbol("star");

    expect(target).to.deep.equal([
      {
        action: "updateStyle",
        value: {
          'marker.symbol': 'star',
        }
      }
    ]);
  });

  it('should return an updateStyle action on changeMarkerSize(size, trace)', () => {
    const target = ScatterPlot.changeMarkerSize(5);

    expect(target).to.deep.equal([
      {
        action: "updateStyle",
        value: {
          'marker.size': 5,
        }
      }
    ]);
  });

  it('should return an updateStyle action on changeLineDash(dash, trace)', () => {
    const target = ScatterPlot.changeLineDash("dash");

    expect(target).to.deep.equal([
      {
        action: "updateStyle",
        value: {
          'line.dash': 'dash',
        }
      }
    ]);
  });

});
