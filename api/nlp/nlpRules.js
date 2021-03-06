module.exports = {
  tags: {
    Component: {
      isA: 'Noun',
    },
    Quotation: {
      isA: 'ValueString',
    },
    ValueString: {
      isA: 'PValue',
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
    dismiss: ['Action', 'ActionHide'],
    remove: ['Action', 'ActionHide'],
    show: ['Action', 'ActionShow'],
    display: ['Action', 'ActionShow'],
    add: ['Action', 'ActionShow'],
    decrease: ['Action', 'ActionDecrease'],
    reduce: ['Action', 'ActionDecrease'],
    increase: ['Action', 'ActionIncrease'],
    legend: ['Component', 'ComponentLegend'],
    legends: ['Component', 'ComponentLegend'],
    line: ['Component', 'ComponentLine'],
    stroke: ['Component', 'ComponentLine'],
    marker: ['Component', 'ComponentMarker'],
    dot: ['Component', 'ComponentDot'],
    bin: ['Component', 'ComponentBin'],
    bins: ['Component', 'ComponentBin'],
    bar: ['Component', 'ComponentBar'],
    bars: ['Component', 'ComponentBar'],
    gridline: ['Component', 'ComponentGridLine'],
    plot: ['Component', 'ComponentPlot'],
    xaxis: ['Component', 'ComponentAxis'],
    yaxis: ['Component', 'ComponentAxis'],
    zaxis: ['Component', 'ComponentAxis'],
    title: ['Attribute', 'AttributeTitle'],
    width: ['Attribute', 'AttributeSize'],
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
    '(red|pink|orange|yellow|gold|magenta|violet|purple|blue|green|white|black|gray|cyan)':
      'ValueColor',
    '(circle|square|diamond|cross|pentagon|hexagon|octagon|star|hexagram)': 'ValueSymbol',
    '(x|y|z)': 'ComponentAxis',
    '(solid|dot|dash)': 'ValueDash',
  },
  rules: {},
  plural: {},
};
