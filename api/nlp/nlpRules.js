module.exports = {
  tags: {
    Component: {
      isA: 'Noun',
    },
    Quotation: {
      isA: ['PValue', 'ValueString'],
    },
    ValueColor: {
      isA: 'PValue',
    },
    ValueSymbol: {
      isA: 'PValue',
    },
    Value: {
      isA: 'PValue',
    },
    ComponentAxis: {
      isA: 'Component',
    },
  },
  words: {
    hide: ['Action', 'ActionHide'],
    show: ['Action', 'ActionShow'],
    legend: ['Component', 'ComponentLegend'],
    legends: ['Component', 'ComponentLegend'],
    line: ['Component', 'ComponentLine'],
    marker: ['Component', 'ComponentMarker'],
    dot: ['Component', 'ComponentDot'],
    bin: ['Component', 'ComponentBin'],
    bar: ['Component', 'ComponentBar'],
    gridline: ['Component', 'ComponentGridLine'],
    plot: ['Component', 'ComponentPlot'],
    title: ['Attribute', 'AttributeTitle'],
    width: ['Attribute', 'AttributeWidth'],
    size: ['Attribute', 'AttributeSize'],
    color: ['Attribute', 'AttributeColor'],
    colour: ['Attribute', 'AttributeColor'],
    position: ['Attribute', 'AttributePosition'],
    range: ['Attribute', 'AttributeRange'],
    order: ['Attribute', 'AttributeOrder'],
    symbol: ['Attribute', 'AttributeSymbol'],
    opacity: ['Attribute', 'AttributeOpacity'],
    percentage: ['PValue', 'ValuePercent'],
    percent: ['PValue', 'ValuePercent'],
    absolute: ['PValue', 'ValueValue'],
    value: ['PValue', 'ValueValue'],
  },
  patterns: {
    '(red|pink|orange|yellow|gold|magenta|violet|purple|blue|green|white|black|gray|cyan)': 'ValueColor',
    '(circle|square|diamond|cross|pentagon|hexagon|octagon|star|hexagram)': 'ValueSymbol',
    '(x|y|z)': 'ComponentAxis',
  },
  rules: {

  },
  plural: {

  },
};
