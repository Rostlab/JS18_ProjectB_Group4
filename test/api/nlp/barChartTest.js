const { expect } = require('chai');
const NLP = require('../../../api/nlp/nlp');

describe('api.nlp.bar', () => {
  it("should return an updateLayout action on getActions with sentence \"Change the order of bars to 'monkeys','orangutans','giraffes'\"", () => {
    const expected = [
      {
        action: 'updateLayout',
        value: {
          'xaxis.categoryarray': ['monkeys', 'orangutans', 'giraffes'],
        },
      },
    ];

    const actual = NLP.getActions(
      "Change the order of bars to 'monkeys','orangutans','giraffes'",
      'bar',
      [{ type: 'bar' }],
      {},
    );

    expect(actual).to.deep.equal(expected);
  });
});
