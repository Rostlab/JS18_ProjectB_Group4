const General = require('../functions/general');
const PieChart = require('../functions/pieChart');
const ScatterPlot = require('../functions/scatterPlot');

module.exports = {
  general: [
    {
      match: [['ActionHide', 'ComponentLegend']],
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return General.hideLegend();
      },
    },
    {
      match: [['ActionShow', 'ComponentLegend']],
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return General.showLegend();
      },
    },
    {
      match: [['ActionHide', 'ComponentAxis', 'ComponentGridLine']],
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return General.hideGridline(matchTags.ComponentAxis.data()[0].normal[0]);
      },
    },
    {
      match: [['ActionShow', 'ComponentAxis', 'ComponentGridLine']],
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return General.showGridline(matchTags.ComponentAxis.data()[0].normal[0]);
      },
    },
    {
      match: [['AttributePosition', 'ComponentLegend', 'Value+']],
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        const tokens = matchTags['Value+']
          .data()[0]
          .text.split(',')
          .map(label => label.trim());
        return General.changeLegendPosition(tokens[0], tokens[1]);
      },
    },
    {
      match: [['AttributeSize', 'ComponentLegend', 'Value']],
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        const size = matchTags.Value.values().numbers()[0];
        return General.changeLegendSize(size);
      },
    },
    {
      match: [['ComponentAxis', 'AttributeTitle', 'Quotation']],
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
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
      match: [['ComponentAxis', 'AttributeRange', 'Value']],
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return General.changeAxisRange(
          matchTags.ComponentAxis.data()[0].normal[0],
          matchTags.Value.values().numbers()[0],
          matchTags.Value.values().numbers()[1],
        );
      },
    },
    {
      match: [['AttributeTitle', 'Quotation']],
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return General.changeTitle(nlpSentence
          .quotations(0)
          .out('text')
          .trim()
          .slice(1, -1));
      },
    },
  ],
  bar: [],
  histogram: [],
  pie: [
    {
      match: [['ValuePercent']],
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return PieChart.showPercentageValues();
      },
    },
    {
      match: [['ValueValue']],
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return PieChart.showAbsoluteValues();
      },
    },
    {
      match: [['Label+', 'ValueColor+']],
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return PieChart.updateColors(
          data,
          matchTags['Label+']
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
      match: [['ActionIncrease', 'ComponentMarker', 'AttributeSize', 'Percent']],
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return ScatterPlot.changeMarkerSizeBy(
          data,
          1 + (matchTags.Percent.values().numbers()[0] / 100),
          traces,
        );
      },
    },
    {
      match: [['ActionDecrease', 'ComponentMarker', 'AttributeSize', 'Percent']],
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return ScatterPlot.changeMarkerSizeBy(
          data,
          1 - (matchTags.Percent.values().numbers()[0] / 100),
          traces,
        );
      },
    },
    {
      match: [['ComponentMarker', 'AttributeSize', 'Value']],
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return ScatterPlot.changeMarkerSize(matchTags.Value.values().numbers()[0], traces);
      },
    },
    {
      match: [['ComponentMarker', 'AttributeOpacity', 'Percent']],
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return ScatterPlot.changeMarkerOpacity(
          matchTags.Percent.values().numbers()[0] / 100,
          traces,
        );
      },
    },
    {
      match: [['ComponentMarker', 'ValueColor']],
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return ScatterPlot.changeMarkerColor(matchTags.ValueColor.out('normal'), traces);
      },
    },
    {
      match: [['ComponentLine', 'ValueColor']],
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return ScatterPlot.changeLineColor(matchTags.ValueColor.out('normal'), traces);
      },
    },
    {
      match: [['ComponentLine', 'AttributeSize', 'Value']],
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return ScatterPlot.changeLineWidth(matchTags.Value.values().numbers()[0], traces);
      },
    },
    {
      match: [['ActionHide', 'ComponentLine']],
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return ScatterPlot.changeScatterMode('markers', traces);
      },
    },
    {
      match: [['ActionShow', 'ComponentLine']],
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return ScatterPlot.changeScatterMode('lines+markers', traces);
      },
    },
    {
      match: [['ValueSymbol']],
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return ScatterPlot.changeMarkerSymbol(matchTags.ValueSymbol.out('normal'), traces);
      },
    },
    {
      match: [['ValueDash']],
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return ScatterPlot.changeLineDash(matchTags.ValueDash.out('normal'), traces);
      },
    },
  ],
};
