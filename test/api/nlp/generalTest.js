const { expect, assert } = require('chai');
const NLP = require('../../../api/nlp/nlp');

describe('api.nlp.general', () => {
  describe('when initialized', () => {
    it('should return null for null sentence', () => {
      const chartType = 'pie';
      const data = [{ type: 'scatter' }];
      const layout = {};

      const actual = NLP.getActions(null, chartType, data, layout);

      assert.isNull(actual);
    });

    it('should return null for null chartType', () => {
      const sentence = 'Some Sentence';
      const data = [{ type: 'scatter' }];
      const layout = {};

      const actual = NLP.getActions(sentence, null, data, layout);

      assert.isNull(actual);
    });

    it('should return null for invalid chartType', () => {
      const sentence = 'Some Sentence';
      const chartType = 'invalidType';
      const data = [{ type: 'scatter' }];
      const layout = {};

      const actual = NLP.getActions(sentence, chartType, data, layout);

      assert.isNull(actual);
    });

    it('should return null for null data', () => {
      const sentence = 'Some Sentence';
      const chartType = 'pie';
      const layout = {};

      const actual = NLP.getActions(sentence, chartType, null, layout);

      assert.isNull(actual);
    });

    it('should return null for null layout', () => {
      const sentence = 'Some Sentence';
      const chartType = 'pie';
      const data = [{ type: 'scatter' }];

      const actual = NLP.getActions(sentence, chartType, data, null);

      assert.isNull(actual);
    });

    it('should not return null for valid paramters', () => {
      const sentence = 'Hide legend';
      const chartType = 'pie';
      const data = [{ type: 'scatter' }];
      const layout = {};

      const actual = NLP.getActions(sentence, chartType, data, layout);

      assert.isNotNull(actual);
    });
  });

  describe('api.nlp.general.title', () => {
    describe('with invalid input', () => {
      it('should return null with no quotations', () => {
        const sentence = 'Change title to Hello world';
        const chartType = 'pie';
        const data = [{ type: 'scatter' }];
        const layout = {};

        const actual = NLP.getActions(sentence, chartType, data, layout);

        assert.isNull(actual);
      });

      it('should return null with one quotation only', () => {
        const sentence = "Change title to 'Hello world";
        const chartType = 'pie';
        const data = [{ type: 'scatter' }];
        const layout = {};

        const actual = NLP.getActions(sentence, chartType, data, layout);

        assert.isNull(actual);
      });

      it('should return null with no title given', () => {
        const sentence = 'Change title';
        const chartType = 'pie';
        const data = [{ type: 'scatter' }];
        const layout = {};

        const actual = NLP.getActions(sentence, chartType, data, layout);

        assert.isNull(actual);
      });
    });

    describe('when valid input', () => {
      it('should return updated layout', () => {
        const sentence = "Change title to 'Hello World'";
        const chartType = 'pie';
        const data = [{ type: 'scatter' }];
        const layout = {};

        const actual = NLP.getActions(sentence, chartType, data, layout);

        expect(actual).to.deep.equal([
          {
            action: 'updateLayout',
            value: {
              title: 'Hello World',
            },
          },
        ]);
      });

      it('should return an updateLayout action on getActions with sentence "Set \'hello world 2\' as plot title"', () => {
        const sentence = "Set 'hello world 2' as plot title";
        const chartType = 'pie';
        const data = [{ type: 'scatter' }];
        const layout = {};

        const actual = NLP.getActions(sentence, chartType, data, layout);

        expect(actual).to.deep.equal([
          {
            action: 'updateLayout',
            value: {
              title: 'hello world 2',
            },
          },
        ]);
      });
    });
  });

  describe('api.nlp.general.legend', () => {
    describe('with invalid input', () => {
      it('should return null for "Change legend position"', () => {
        const sentence = 'Change legend position';
        const chartType = 'pie';
        const data = [{ type: 'scatter' }];
        const layout = {};

        const actual = NLP.getActions(sentence, chartType, data, layout);

        assert.isNull(actual);
      });

      it('should return an updateLayout action on getActions with sentence "Change legend size"', () => {
        const sentence = 'Change legend size';
        const chartType = 'pie';
        const data = [{ type: 'scatter' }];
        const layout = {};

        const actual = NLP.getActions(sentence, chartType, data, layout);

        assert.isNull(actual);
      });
    });

    describe('with valid input', () => {
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
        const target = NLP.getActions(
          'Change legend size to 14',
          'scatter',
          [{ type: 'scatter' }],
          {},
        );

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
    });
  });

  describe('axis', () => {
    describe('with invalid input', () => {
      it('should return null with sentence "Change yaxis title "', () => {
        const sentence = 'Change yaxis title to';
        const chartType = 'pie';
        const data = [{ type: 'scatter' }];
        const layout = {};

        const actual = NLP.getActions(sentence, chartType, data, layout);

        assert.isNull(actual);
      });

      it('should return null with sentence "Change yaxis title something"', () => {
        const sentence = 'Change yaxis title to something';
        const chartType = 'pie';
        const data = [{ type: 'scatter' }];
        const layout = {};

        const actual = NLP.getActions(sentence, chartType, data, layout);

        assert.isNull(actual);
      });
    });

    describe('with valid input', () => {
      it('should return an updateLayout action on getActions with sentence "Hide x gridline"', () => {
        const target = NLP.getActions('Hide x gridline', 'scatter', [{ type: 'scatter' }], {});

        expect(target).to.deep.equal([
          {
            action: 'updateLayout',
            value: {
              xaxis: {
                showgrid: false,
              },
            },
          },
        ]);
      });

      it('should return an updateLayout action on getActions with sentence "Hide y gridline"', () => {
        const target = NLP.getActions('Hide yaxis gridline', 'scatter', [{ type: 'scatter' }], {});

        expect(target).to.deep.equal([
          {
            action: 'updateLayout',
            value: {
              yaxis: {
                showgrid: false,
              },
            },
          },
        ]);
      });

      it('should return an updateLayout action on getActions with sentence "Show z gridline"', () => {
        const target = NLP.getActions('Show zaxis gridline', 'scatter', [{ type: 'scatter' }], {});

        expect(target).to.deep.equal([
          {
            action: 'updateLayout',
            value: {
              zaxis: {
                showgrid: true,
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
  });
});
