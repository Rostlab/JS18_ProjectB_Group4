const ChartHelper = require('../helpers/chartHelper');
const environment = require('../helpers/environment');
const PieChart = require('../functions/pieChart');

const rules = {
  general: [
    {
      match: 'Change plot title to title#string',
      onmatch(data, layout, matchTree) {
        return PieChart.showPercentageValues();
      },
    },
  ],
  pie: [
    {
      match: 'Display as percentage',
      onmatch(data, layout, matchTree) {
        return PieChart.showPercentageValues();
      },
    },
    {
      match: 'Display as absolute',
      onmatch(data, layout, matchTree) {
        return PieChart.showAbsoluteValues();
      },
    },
    {
      // This match string is just for an idea, will be changed later
      match: 'Change color of labels#string_list to colors#color_list',
      onmatch(data, layout, matchTree) {
        return PieChart.updateColors(data, matchTree.labels, matchTree.colors);
      },
    },
  ],
};

function getActions(sentence, chartType, data, layout) {
  if (!rules[chartType] || !chartType || !data || !layout) {
    return null;
  }

  for (let i = 0; i < rules.general.length; i++) {
    const rule = rules.general[i];
    // Todo using NLP library here
    if (sentence === rule.match) {
      return rule.onmatch(data, layout, {});
    }
  }

  for (let i = 0; i < rules[chartType].length; i++) {
    const rule = rules[chartType][i];
    // Todo using NLP library here
    if (sentence === rule.match) {
      return rule.onmatch(data, layout, {});
    }
  }

  return null;
}

function postRequest(req, res) {
  const chartType = ChartHelper.getChartType(req.body.data);

  const actions = getActions(req.body.sentence, chartType, req.body.data, req.body.layout);

  if (actions === null) {
    return res.status(400).json({});
  }

  return res.status(200).json(actions);
}

module.exports = {
  postRequest,
};
