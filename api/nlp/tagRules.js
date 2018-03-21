const General = require('../functions/general');
const PieChart = require('../functions/pieChart');
const ScatterPlot = require('../functions/scatterPlot');

module.exports = {
  general: [
    {
      match: [
        ['ActionHide', 'ComponentLegend'],
      ],
      actions(data, layout, matchRule, matchTags) {
        return General.hideLegend();
      },
    },
    {
      match: [
        ['ActionShow', 'ComponentLegend'],
      ],
      actions(data, layout, matchRule, matchTags) {
        return General.showLegend();
      },
    },
  ],
  bar: [],
  histogram: [],
  pie: [
    {
      match: [
        ['ValuePercent'],
      ],
      actions(data, layout, matchRule, matchTags) {
        return PieChart.showPercentageValues();
      },
    },
    {
      match: [
        ['ValueValue'],
      ],
      actions(data, layout, matchRule, matchTags) {
        return PieChart.showAbsoluteValues();
      },
    },
  ],
  scatter: [
    {
      match: [
        ['ComponentMarker', 'AttributeSymbol', 'ValueSymbol'],
        ['ComponentMarker', 'ValueSymbol'],
      ],
      actions(data, layout, matchRule, matchTags) {
        return ScatterPlot.changeMarkerSymbol(matchTags.ValueSymbol.out().trim());
      },
    },
    {
      match: [
        ['ComponentMarker', 'AttributeSize', 'Value'],
      ],
      actions(data, layout, matchRule, matchTags) {
        return ScatterPlot.changeMarkerSize(matchTags.Value.values().data()[0].number);
      },
    },
    {
      match: [
        ['ComponentMarker', 'AttributeOpacity', 'Percent'],
      ],
      actions(data, layout, matchRule, matchTags) {
        return ScatterPlot.changeMarkerOpacity(matchTags.Percent.values().data()[0].number / 100);
      },
    },
    {
      match: [
        ['ComponentLine', 'AttributeColor', 'ValueColor'],
      ],
      actions(data, layout, matchRule, matchTags) {
        return ScatterPlot.changeLineColor(matchTags.ValueColor.out().trim());
      },
    },
  ],
};