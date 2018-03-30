const General = require('../functions/general');
const PieChart = require('../functions/pieChart');
const ScatterPlot = require('../functions/scatterPlot');
const BarChart = require('../functions/barChart');
const Histogram = require('../functions/histogram');

module.exports = {
  general: [
    {
      match: [['ActionHide', 'ComponentLegend']],
      actions(data, layout, matchRule, matchTags, nlpSentence) {
        return General.hideLegend();
      },
    },
    {
      match: [['ActionShow', 'ComponentLegend']],
      actions(data, layout, matchRule, matchTags, nlpSentence) {
        return General.showLegend();
      },
    },
    {
      match: [['AttributePosition', 'ComponentLegend', 'Value+']],
      actions(data, layout, matchRule, matchTags, nlpSentence) {
        const tokens = matchTags['Value+']
          .data()[0]
          .text.split(',')
          .map(label => label.trim());
        return General.changeLegendPosition(tokens[0], tokens[1]);
      },
    },
    {
      match: [['AttributeSize', 'ComponentLegend', 'Value']],
      actions(data, layout, matchRule, matchTags, nlpSentence) {
        const size = matchTags.Value.values().numbers()[0];
        return General.changeLegendSize(size);
      },
    },
    {
      match: [['ComponentAxis', 'AttributeTitle', 'Quotation']],
      actions(data, layout, matchRule, matchTags, nlpSentence) {
        return General.changeAxisTitle(
          matchTags.ComponentAxis.data()[0].normal[0],
          nlpSentence
            .quotations(0)
            .out('text')
            .trim()
            .slice(1, -1),
        );
      },
    },
    {
      match: [['AttributeTitle', 'AttributeOrder']],
      actions(data, layout, matchRule, matchTags, nlpSentence) {
        return General.changeTitle(nlpSentence
          .quotations(0)
          .out('text')
          .trim()
          .slice(1, -1));
      },
    },
  ],
  bar: [{
      match: [['ComponentBar', 'order','Quotation+']],
      actions(data, layout, matchRule, matchTags, nlpSentence) {
          return BarChart.changeCategoryOrder(layout,nlpSentence
            .quotations().map(quot=>
            {return quot.out('text')
            .trim()
            .slice(1, -1);
            }));
      },
  }],
  histogram: [{
      match: [['ComponentBin', 'Value']],
      actions(data, layout, matchRule, matchTags, nlpSentence) {
          return Histogram.setXbins(layout, null, null, null, matchTags.Value.values().numbers()[0]);
      },
  },
  {
      match: [['ComponentAxis', 'AttributeRange','NumericValue+']],
      actions(data, layout, matchRule, matchTags, nlpSentence) {
          return Histogram.setXbins(layout, matchTags.NumericValue.values().numbers()[0], matchTags.NumericValue.values().numbers()[1], null, null);
      },
  }],
  pie: [
    {
      match: [['ValuePercent']],
      actions(data, layout, matchRule, matchTags, nlpSentence) {
        return PieChart.showPercentageValues();
      },
    },
    {
      match: [['ValueValue']],
      actions(data, layout, matchRule, matchTags, nlpSentence) {
        return PieChart.showAbsoluteValues();
      },
    },
    {
      match: [['ValueLabel+', 'ValueColor+']],
      actions(data, layout, matchRule, matchTags, nlpSentence) {
        return PieChart.updateColors(
          data,
          matchTags['ValueLabel+']
            .data()[0]
            .text.split(',')
            .map(label => label.trim()),
          matchTags['ValueColor+'].out('array')[0].split(' '),
        );
      },
    },
  ],
  scatter: [
    {
      match: [['ComponentMarker', 'AttributeSize', 'Value']],
      actions(data, layout, matchRule, matchTags, nlpSentence) {
        return ScatterPlot.changeMarkerSize(matchTags.Value.values().numbers()[0]);
      },
    },
    {
      match: [['ComponentMarker', 'AttributeOpacity', 'Percent']],
      actions(data, layout, matchRule, matchTags, nlpSentence) {
        return ScatterPlot.changeMarkerOpacity(matchTags.Percent.values().numbers()[0] / 100);
      },
    },
    {
      match: [['ComponentLine', 'ValueColor']],
      actions(data, layout, matchRule, matchTags, nlpSentence) {
        return ScatterPlot.changeLineColor(matchTags.ValueColor.out('normal'));
      },
    },
    {
      match: [['ComponentLine', 'AttributeSize', 'Value']],
      actions(data, layout, matchRule, matchTags, nlpSentence) {
        return ScatterPlot.changeLineWidth(matchTags.Value.values().numbers()[0]);
      },
    },
    {
      match: [['ActionHide', 'ComponentLine']],
      actions(data, layout, matchRule, matchTags, nlpSentence) {
        return ScatterPlot.changeScatterMode('markers');
      },
    },
    {
      match: [['ActionShow', 'ComponentLine']],
      actions(data, layout, matchRule, matchTags, nlpSentence) {
        return ScatterPlot.changeScatterMode('lines+markers');
      },
    },
    {
      match: [['ValueSymbol']],
      actions(data, layout, matchRule, matchTags, nlpSentence) {
        return ScatterPlot.changeMarkerSymbol(matchTags.ValueSymbol.out('normal'));
      },
    },
    {
      match: [['ValueDash']],
      actions(data, layout, matchRule, matchTags, nlpSentence) {
        return ScatterPlot.changeLineDash(matchTags.ValueDash.out('normal'));
      },
    },
  ],
};
