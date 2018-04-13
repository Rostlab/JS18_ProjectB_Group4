const General = require('../functions/general');
const PieChart = require('../functions/pieChart');
const ScatterPlot = require('../functions/scatterPlot');
const BarChart = require('../functions/barChart');
const Histogram = require('../functions/histogram');

module.exports = {
  general: [
    {
      match: {
        ActionHide: '1-',
        ActionShow: 0,
        ComponentLegend: '1-',
      },
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return General.hideLegend();
      },
    },
    {
      match: {
        ActionShow: '1-',
        ActionHide: 0,
        ComponentLegend: '1-',
      },
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return General.showLegend();
      },
    },
    {
      match: {
        ActionHide: '1-',
        ActionShow: 0,
        ComponentAxis: 1,
        ComponentGridLine: '1-',
      },
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return General.hideGridline(matchTags.ComponentAxis.data()[0].normal[0]);
      },
    },
    {
      match: {
        ActionShow: '1-',
        ActionHide: 0,
        ComponentAxis: 1,
        ComponentGridLine: '1-',
      },
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return General.showGridline(matchTags.ComponentAxis.data()[0].normal[0]);
      },
    },
    {
      match: {
        AttributePosition: '1-',
        ComponentLegend: '1-',
        'Value+': 1,
      },
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        const tokens = matchTags['Value+']
          .data()[0]
          .text.split(',')
          .map(label => label.trim());
        return General.changeLegendPosition(tokens[0], tokens[1]);
      },
    },
    {
      match: {
        AttributeSize: '1-',
        ComponentLegend: '1-',
        Value: 1,
      },
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        const size = matchTags.Value.values().numbers()[0];
        return General.changeLegendSize(size);
      },
    },
    {
      match: {
        ComponentAxis: 1,
        AttributeTitle: '1-',
        Quotation: 1,
      },
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return General.changeAxisTitle(
          matchTags.ComponentAxis.data()[0].normal[0],
          matchTags.Quotation[0],
        );
      },
    },
    {
      match: {
        ComponentAxis: 1,
        AttributeRange: '1-',
        Value: 2,
      },
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return General.changeAxisRange(
          matchTags.ComponentAxis.data()[0].normal[0],
          matchTags.Value.values().numbers()[0],
          matchTags.Value.values().numbers()[1],
        );
      },
    },
    {
      match: {
        ComponentAxis: 0,
        AttributeTitle: '1-',
        Quotation: 1,
      },
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return General.changeTitle(matchTags.Quotation[0]);
      },
    },
  ],
  bar: [
    {
      match: {
        AttributeOrder: '1-',
        Quotation: '1-',
      },
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return BarChart.changeCategoryOrder(
          layout,
          matchTags.Quotation,
        );
      },
    },
  ],
  histogram: [
    {
      match: {
        ComponentBin: '1-',
        AttributeSize: '1-',
        Value: 1,
      },
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return Histogram.setXbins(
          layout,
          null,
          null,
          matchTags.Value.values().numbers()[0],
          null,
        );
      },
    },
    {
      match: {
        ComponentBin: '1-',
        Value: 1,
      },
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return Histogram.setXbins(layout, null, null, null, matchTags.Value.values().numbers()[0]);
      },
    },
  ],
  pie: [
    {
      match: {
        ValuePercent: '1-',
      },
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return PieChart.showPercentageValues();
      },
    },
    {
      match: {
        ValueValue: '1-',
      },
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return PieChart.showAbsoluteValues();
      },
    },
    {
      match: {
        'Label+': 1,
        'ValueColor+': 1,
      },
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
      match: {
        ActionIncrease: '1-',
        ActionDecrease: 0,
        ComponentMarker: '1-',
        AttributeSize: '1-',
        Percent: 1,
      },
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return ScatterPlot.changeMarkerSizeBy(
          data,
          1 + (matchTags.Percent.values().numbers()[0] / 100),
          traces,
        );
      },
    },
    {
      match: {
        ActionDecrease: '1-',
        ActionIncrease: 0,
        ComponentMarker: '1-',
        AttributeSize: '1-',
        Percent: 1,
      },
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return ScatterPlot.changeMarkerSizeBy(
          data,
          1 - (matchTags.Percent.values().numbers()[0] / 100),
          traces,
        );
      },
    },
    {
      match: {
        ComponentMarker: '1-',
        AttributeSize: '1-',
        Value: 1,
      },
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return ScatterPlot.changeMarkerSize(matchTags.Value.values().numbers()[0], traces);
      },
    },
    {
      match: {
        ComponentMarker: '1-',
        AttributeOpacity: '1-',
        Percent: 1,
      },
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return ScatterPlot.changeMarkerOpacity(
          matchTags.Percent.values().numbers()[0] / 100,
          traces,
        );
      },
    },
    {
      match: {
        ComponentMarker: '1-',
        ValueColor: 1,
      },
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return ScatterPlot.changeMarkerColor(matchTags.ValueColor.out('normal'), traces);
      },
    },
    {
      match: {
        ComponentLine: '1-',
        ValueColor: 1,
      },
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return ScatterPlot.changeLineColor(matchTags.ValueColor.out('normal'), traces);
      },
    },
    {
      match: {
        ComponentLine: '1-',
        AttributeSize: '1-',
        Value: 1,
      },
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return ScatterPlot.changeLineWidth(matchTags.Value.values().numbers()[0], traces);
      },
    },
    {
      match: {
        ActionHide: '1-',
        ActionShow: 0,
        ComponentLine: '1-',
      },
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return ScatterPlot.changeScatterMode('markers', traces);
      },
    },
    {
      match: {
        ActionShow: '1-',
        ActionHide: 0,
        ComponentLine: '1-',
      },
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return ScatterPlot.changeScatterMode('lines+markers', traces);
      },
    },
    {
      match: {
        ValueSymbol: '1-',
      },
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return ScatterPlot.changeMarkerSymbol(matchTags.ValueSymbol.out('normal'), traces);
      },
    },
    {
      match: {
        ValueDash: '1-',
      },
      actions(data, layout, matchRule, matchTags, nlpSentence, traces) {
        return ScatterPlot.changeLineDash(matchTags.ValueDash.out('normal'), traces);
      },
    },
  ],
};
