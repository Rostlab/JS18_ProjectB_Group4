const General = require('../functions/general');
const PieChart = require('../functions/pieChart');
const ScatterPlot = require('../functions/scatterPlot');

module.exports = {
  general: [
    {
      match: [
        ['ActionHide', 'ComponentLegend'],
      ],
      actions(data, layout, matchRule, matchTags, nlpSentence) {
        return General.hideLegend();
      },
    },
    {
      match: [
        ['ActionShow', 'ComponentLegend'],
      ],
      actions(data, layout, matchRule, matchTags, nlpSentence) {
        return General.showLegend();
      },
    },
    {
      match: [
        ['AttributeTitle', 'Quotation'],
      ],
      actions(data, layout, matchRule, matchTags, nlpSentence) {
        return General.changeTitle(nlpSentence.quotations(0).out('text').trim().slice(1, -1));
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
      actions(data, layout, matchRule, matchTags, nlpSentence) {
        return PieChart.showPercentageValues();
      },
    },
    {
      match: [
        ['ValueValue'],
      ],
      actions(data, layout, matchRule, matchTags, nlpSentence) {
        return PieChart.showAbsoluteValues();
      },
    },
    {
      match: [
        ['ValueLabel+', 'ValueColor+'],
      ],
      actions(data, layout, matchRule, matchTags, nlpSentence) {
        return PieChart.updateColors(
          data,
          matchTags['ValueLabel+'].data()[0].text.split(',').map(label => label.trim()),
          matchTags['ValueColor+'].out('array')[0].split(' '),
        );
      },
    },
  ],
  scatter: [
    {
      match: [
        ['ComponentMarker', 'AttributeSize', 'Value'],
      ],
      actions(data, layout, matchRule, matchTags, nlpSentence) {
        return ScatterPlot.changeMarkerSize(matchTags.Value.values().numbers()[0]);
      },
    },
    {
      match: [
        ['ComponentMarker', 'AttributeOpacity', 'Percent'],
      ],
      actions(data, layout, matchRule, matchTags, nlpSentence) {
        return ScatterPlot.changeMarkerOpacity(matchTags.Percent.values().numbers()[0] / 100);
      },
    },
    {
      match: [
        ['ComponentLine', 'AttributeColor', 'ValueColor'],
      ],
      actions(data, layout, matchRule, matchTags, nlpSentence) {
        return ScatterPlot.changeLineColor(matchTags.ValueColor.out('normal'));
      },
    },
    {
      match: [
        ['ValueSymbol'],
      ],
      actions(data, layout, matchRule, matchTags, nlpSentence) {
        return ScatterPlot.changeMarkerSymbol(matchTags.ValueSymbol.out('normal'));
      },
    },
  ],
};
