const { expect } = require('chai');
const NLP = require('../../../api/nlp/nlp');

describe('api.nlp.general', () => {
  it('should return an updateLayout action on getActions with sentence "Change title to hello world"', () => {
    const target = NLP.getActions('Change title to hello world', 'scatter', [{ type: 'scatter' }], {});

    expect(target).to.deep.equal([
      {
        action: 'updateLayout',
        value: {
          title: 'hello world',
        },
      },
    ]);
  });

  it('should return an updateLayout action on getActions with sentence "Set hello world 2 as plot title"', () => {
    const target = NLP.getActions('Set hello world 2 as plot title', 'scatter', [{ type: 'scatter' }], {});

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

  it('should return an updateLayout action on getActions with sentence "Show legend"', () => {
    const target = NLP.getActions('Show legend', 'scatter', [{ type: 'scatter' }], {});

    expect(target).to.deep.equal([
      {
        action: 'updateLayout',
        value: {
          showlegend: true,
        },
      },
    ]);
  });
});