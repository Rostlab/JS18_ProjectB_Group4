const General = require('../functions/general');
const PieChart = require('../functions/pieChart');
const ScatterPlot = require('../functions/scatterPlot');

module.exports = {
  general: [
    {
      match: [
        '(change|set|update) (plot|graph|chart)? title to *',
        '(change|set|update) * as (plot|graph|chart)? title',
      ],
      actions(data, layout, matchRule, matchNLP) {
        if (matchRule === 0) {
          return General.changeTitle(matchNLP.after('to').out().trim());
        }
        return General.changeTitle(matchNLP.before('as').after('(change|set|update)').out().trim());
      },
    },
  ],
  bar: [

  ],
  histogram: [

  ],
  pie: [
    {
      match: ['change color of * to *'],
      actions(data, layout, matchRule, matchNLP) {
        return PieChart.updateColors(
          data,
          matchNLP.before('to').after('of').out().trim()
            .split(',')
            .map(Function.prototype.call, String.prototype.trim),
          matchNLP.after('to').out().trim()
            .split(',')
            .map(Function.prototype.call, String.prototype.trim),
        );
      },
    },
  ],
  scatter: [

  ],
};
