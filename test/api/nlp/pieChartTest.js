const { expect, assert } = require('chai');
const NLP = require('../../../api/nlp/nlp');

describe('api.nlp.pie', () => {
  describe('with invalid input', () => {
    it('should return null with sentence "Display as"', () => {
      const actual = NLP.getActions('Display as', 'pie', [{ type: 'pie' }], {});

      assert.isNull(actual);
    });

    it('should return null with sentence "Change to blue, green"', () => {
      const actual = NLP.getActions(
        'Change to blue, green',
        'pie',
        [
          {
            values: [19, 26, 55],
            labels: ['Residential', 'Non_Residential', 'Utility'],
            type: 'pie',
            marker: {
              colors: ['red', 'green', 'blue'],
            },
          },
        ],
        {},
      );

      assert.isNull(actual);
    });

    it('should return null with sentence "Change of Residential, Non_Residential, Utility to "', () => {
      const actual = NLP.getActions(
        'Change Residential, Non_Residential, Utility to',
        'pie',
        [
          {
            values: [19, 26, 55],
            labels: ['Residential', 'Non_Residential', 'Utility'],
            type: 'pie',
            marker: {
              colors: ['red', 'green', 'blue'],
            },
          },
        ],
        {},
      );

      assert.isNull(actual);
    });
  });

  describe('with valid input', () => {
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

    it('should return an updateStyle action on getActions with sentence "Change of Residential, Non_Residential, Utility to red, green, blue"', () => {
      const target = NLP.getActions(
        'Change Residential, Non_Residential, Utility to green, blue, red',
        'pie',
        [
          {
            values: [19, 26, 55],
            labels: ['Residential', 'Non_Residential', 'Utility'],
            type: 'pie',
            marker: {
              colors: ['red', 'green', 'blue'],
            },
          },
        ],
        {},
      );

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

    it('should return an updateStyle action on getActions with sentence "Change color of Residential, Non_Residential, Utility to red, green, blue"', () => {
      const target = NLP.getActions(
        'Change color of Residential, Non_Residential, Utility to green, blue, red',
        'pie',
        [
          {
            values: [19, 26, 55],
            labels: ['Residential', 'Non_Residential', 'Utility'],
            type: 'pie',
            marker: {
              colors: ['red', 'green', 'blue'],
            },
          },
        ],
        {},
      );

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
});
