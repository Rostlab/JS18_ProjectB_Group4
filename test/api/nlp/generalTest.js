const { expect } = require('chai');
const NLP = require('../../../api/nlp/nlp');

describe('api.nlp.general', () => {
  it('should return an updateLayout action on getActions with sentence "Change title to \'hello world\'"', () => {
    const target = NLP.getActions(
      "Change title to 'Hello world'",
      'scatter',
      [{ type: 'scatter' }],
      {},
    );

    expect(target).to.deep.equal([
      {
        action: 'updateLayout',
        value: {
          title: 'Hello world',
        },
      },
    ]);
  });

  it('should return an updateLayout action on getActions with sentence "Set \'hello world 2\' as plot title"', () => {
    const target = NLP.getActions(
      "Set 'hello world 2' as plot title",
      'scatter',
      [{ type: 'scatter' }],
      {},
    );

    expect(target).to.deep.equal([
      {
        action: 'updateLayout',
        value: {
          title: 'hello world 2',
        },
      },
    ]);
  });

  it('should return an updateLayout action on getActions with sentence "Hide legend"', () => {
    const target = NLP.getActions('Hide legend', 'scatter', [{ type: 'scatter' }], {});

    expect(target).to.deep.equal([
      {
        action: 'updateLayout',
        value: {
          showlegend: false,
        },
      },
    ]);
  });

  it('should return an updateLayout action on getActions with sentence "Change legend position to 1,0"', () => {
    const target = NLP.getActions(
      'Change legend position to 1,0',
      'scatter',
      [{ type: 'scatter' }],
      {},
    );

    expect(target).to.deep.equal([
      {
        action: 'updateLayout',
        value: {
          legend: {
            x: '1',
            y: '0',
          },
        },
      },
    ]);
  });

  it('should return an updateLayout action on getActions with sentence "Change legend size to 14"', () => {
    const target = NLP.getActions('Change legend size to 14', 'scatter', [{ type: 'scatter' }], {});

    expect(target).to.deep.equal([
      {
        action: 'updateLayout',
        value: {
          legend: {
            font: {
              size: 14,
            },
          },
        },
      },
    ]);
  });

  it('should return an updateLayout action on getActions with sentence "Change yaxis title to \'hello world\'"', () => {
    const target = NLP.getActions(
      "Change yaxis title to 'hello world'",
      'scatter',
      [{ type: 'scatter' }],
      {},
    );

    expect(target).to.deep.equal([
      {
        action: 'updateLayout',
        value: {
          yaxis: {
            title: 'hello world',
          },
        },
      },
    ]);
  });

  it('should return an updateLayout action on getActions with sentence "Change yaxis range from 1 to 5', () => {
    const target = NLP.getActions(
      'Change yaxis range from 1 to 5',
      'scatter',
      [{ type: 'scatter' }],
      {},
    );

    expect(target).to.deep.equal([
      {
        action: 'updateLayout',
        value: {
          yaxis: {
            range: [1, 5],
          },
        },
      },
    ]);
  });
});
