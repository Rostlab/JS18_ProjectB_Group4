const { expect } = require('chai');
const NLP = require('../../../api/nlp/nlp');

describe('api.nlp.scatterPlot', () => {
  it('should return an updateStyle action on getActions with sentence "Change marker symbol to star"', () => {
    const target = NLP.getActions('Change marker symbol to star', 'scatter', [{ type: 'scatter' }], {});

    expect(target).to.deep.equal([
      {
        action: 'updateStyle',
        value: {
          'marker.symbol': 'star',
        },
      },
    ]);
  });

  it('should return an updateStyle action on getActions with sentence "Use circle marker"', () => {
    const target = NLP.getActions('Use circle marker', 'scatter', [{ type: 'scatter' }], {});

    expect(target).to.deep.equal([
      {
        action: 'updateStyle',
        value: {
          'marker.symbol': 'circle',
        },
      },
    ]);
  });

  it('should return an updateStyle action on getActions with sentence "Change marker size to 12"', () => {
    const target = NLP.getActions('Change marker size to 12', 'scatter', [{ type: 'scatter' }], {});

    expect(target).to.deep.equal([
      {
        action: 'updateStyle',
        value: {
          'marker.size': 12,
        },
      },
    ]);
  });

  it('should return an updateStyle action on getActions with sentence "Change marker opacity to 70%"', () => {
    const target = NLP.getActions('Change marker opacity to 70%', 'scatter', [{ type: 'scatter' }], {});

    expect(target).to.deep.equal([
      {
        action: 'updateStyle',
        value: {
          'marker.opacity': 0.7,
        },
      },
    ]);
  });

  it('should return an updateStyle action on getActions with sentence "Change line color to red"', () => {
    const target = NLP.getActions('Change line color to red', 'scatter', [{ type: 'scatter' }], {});

    expect(target).to.deep.equal([
      {
        action: 'updateStyle',
        value: {
          'line.color': 'red',
        },
      },
    ]);
  });

  it('should return an updateStyle action on getActions with sentence "Change line width to 12"', () => {
    const target = NLP.getActions('Change line width to 12', 'scatter', [{ type: 'scatter' }], {});

    expect(target).to.deep.equal([
      {
        action: 'updateStyle',
        value: {
          'line.width': 12,
        },
      },
    ]);
  });

  it('should return an updateStyle action on getActions with sentence "Use dash line"', () => {
    const target = NLP.getActions('Use dash line', 'scatter', [{ type: 'scatter' }], {});

    expect(target).to.deep.equal([
      {
        action: 'updateStyle',
        value: {
          'line.dash': 'dash',
        },
      },
    ]);
  });

  it('should return an updateStyle action on getActions with sentence "Show line"', () => {
    const target = NLP.getActions('Show line', 'scatter', [{ type: 'scatter' }], {});

    expect(target).to.deep.equal([
      {
        action: 'updateStyle',
        value: {
          mode: 'lines+markers',
        },
      },
    ]);
  });

  it('should return an updateStyle action on getActions with sentence "Hide line"', () => {
    const target = NLP.getActions('Hide line', 'scatter', [{ type: 'scatter' }], {});

    expect(target).to.deep.equal([
      {
        action: 'updateStyle',
        value: {
          mode: 'markers',
        },
      },
    ]);
  });
});
