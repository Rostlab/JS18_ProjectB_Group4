const { expect } = require('chai');
const NLP = require('../../../api/nlp/nlp');

describe('api.nlp.pie', () => {
  it('should return an updateStyle action on getActions with sentence "Display as percentage"', () => {
    const target = NLP.getActions('Display as percentage', 'pie', [{ type: 'pie' }], {});

    expect(target).to.deep.equal([
      {
        action: 'updateStyle',
        value: {
          textinfo: 'percent',
        },
      },
    ]);
  });

  it('should return an updateStyle action on getActions with sentence "Display as absolute"', () => {
    const target = NLP.getActions('Display as absolute', 'pie', [{ type: 'pie' }], {});

    expect(target).to.deep.equal([
      {
        action: 'updateStyle',
        value: {
          textinfo: 'value',
        },
      },
    ]);
  });

  it('should return an updateStyle action on getActions with sentence "Change color of Residential, Non_Residential, Utility to red, green, blue"', () => {
    const target = NLP.getActions('Change color of Residential, Non_Residential, Utility to green, blue, red', 'pie', [
      {
        values: [19, 26, 55],
        labels: ['Residential', 'Non_Residential', 'Utility'],
        type: 'pie',
        marker: {
          colors: ['red', 'green', 'blue'],
        },
      },
    ], {});

    expect(target).to.deep.equal([
      {
        action: 'updateStyle',
        value: {
          marker: {
            colors: ['green', 'blue', 'red'],
          },
        },
        trace: 0,
      },
    ]);
  });
});
