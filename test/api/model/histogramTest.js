const { expect } = require('chai');
const Histogram = require('./../../../api/model/histogram');

describe('api.model.histogram', () => {
  it('should return an updateStyle action on set_xbins(layout, start, end, size, nbin)', () => {
    const layout = {
      xaxis: {
        range: [3, 100]
      }
    };

    const target = Histogram.set_xbins(layout, undefined, undefined, undefined, nbin=4);

    expect(target).to.deep.equal([
      {
        action: "updateStyle",
        value: {
          autobinx: false,
          xbins: {
            start: 3,
            end: 100,
            size: 24.25
          }
        }
      }
    ]);
  });

});
