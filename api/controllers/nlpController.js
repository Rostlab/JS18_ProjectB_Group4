const ChartHelper = require('../helpers/chartHelper');
const environment = require('../helpers/environment');
const PieChart = require('../functions/pieChart');

const rules = {
  general: [
    {
      match: 'Change plot title to title#string',
      actions(data, layout, matchTree) {
        return PieChart.showPercentageValues();
      },
    },
  ],
  pie: [
    {
      match: 'Display as percentage',
      actions(data, layout, matchTree) {
        return PieChart.showPercentageValues();
      },
    },
    {
      match: 'Display as absolute',
      actions(data, layout, matchTree) {
        return PieChart.showAbsoluteValues();
      },
    },
    {
      // This match string is just for an idea, will be changed later
      match: 'Change color of labels#string_list to colors#color_list',
      actions(data, layout, matchTree) {
        return PieChart.updateColors(data, matchTree.labels, matchTree.colors);
      },
    },
  ],
};

function getActionsByRuleList(ruleList, sentence, data, layout) {
  for (let i = 0; i < ruleList.length; i++) {
    const rule = ruleList[i];
    // Todo using NLP library here
    if (sentence === rule.match) {
      return rule.actions(data, layout, {});
    }
  }
  return null;
}

function getActions(sentence, chartType, data, layout) {
  if (!rules[chartType] || !chartType || !data || !layout) {
    return null;
  }

  // Try matching general rules first then try matching chart type specific rules.
  return getActionsByRuleList(rules.general, sentence, data, layout)
    || getActionsByRuleList(rules[chartType], sentence, data, layout);
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
