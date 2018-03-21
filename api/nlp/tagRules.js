const General = require('../functions/general');
const PieChart = require('../functions/pieChart');
const ScatterPlot = require('../functions/scatterPlot');

module.exports = {
  general: [],
  bar: [],
  histogram: [],
  pie: [],
  scatter: [
    {
      match: [
        ['ComponentLine', 'AttributeColor', 'ValueColor'],
      ],
      actions(data, layout, matchRule, matchTags) {
        return ScatterPlot.changeLineColor(matchTags.ValueColor);
      },
    },
  ],
};
