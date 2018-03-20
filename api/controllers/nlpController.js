const ChartHelper = require('../helpers/chartHelper');
const General = require('../functions/general');
const PieChart = require('../functions/pieChart');

const rules = {
  general: [
    {
      match: /^(Change|Set|Update) (plot |graph |chart )?title to (.*?)$/im,
      actions(data, layout, matchTree) {
        return General.changeTitle(matchTree[matchTree.length - 1]);
      },
    },
    {
      match: /^Hide legend$/im,
      actions(data, layout, matchTree) {
        return General.hideLegend();
      },
    },
    {
      match: /^Show legend$/im,
      actions(data, layout, matchTree) {
        return General.showLegend();
      },
    },
  ],
  pie: [
    {
      match: /^Display as percentage$/im,
      actions(data, layout, matchTree) {
        return PieChart.showPercentageValues();
      },
    },
    {
      match: /^Display as absolute$/im,
      actions(data, layout, matchTree) {
        return PieChart.showAbsoluteValues();
      },
    },
    {
      // This match string is just for an idea, will be changed later
      match: /^Change color of labels#string_list to colors#color_list$/im,
      actions(data, layout, matchTree) {
        return PieChart.updateColors(data, matchTree.labels, matchTree.colors);
      },
    },
  ],
};

/**
 * Get action for the given sentence.
 * @param {any} ruleList List of rules to check.
 * @param {string} sentence Query sentence.
 * @param {any} data Chart.data object.
 * @param {any} layout Chart.layout object.
 * @returns {any} Action if given sentence applies to given rules. Else returns null.
 */
function getActionsByRuleList(ruleList, sentence, data, layout) {
  for (let i = 0; i < ruleList.length; i++) {
    const rule = ruleList[i];
    if (rule.match.test(sentence)) {
      return rule.actions(data, layout, rule.match.exec(sentence));
    }
    // Todo using NLP library here
    // if (sentence === rule.match) {
    //   return rule.actions(data, layout, {});
    // }
  }
  return null;
}

/**
 * Gets the action for the given chart type and sentence.
 * @param {string} sentence Query sentence.
 * @param {any} chartType Type of the chart.
 * @param {any} data Chart.data object.
 * @param {any} layout Chart.layout object.
 * @returns {any} Action if given sentence applies to given rules. Else returns null.
 */
function getActions(sentence, chartType, data, layout) {
  if (!rules[chartType] || !chartType || !data || !layout) {
    return null;
  }

  // Try matching general rules first then try matching chart type specific rules.
  return (
    getActionsByRuleList(rules.general, sentence, data, layout) ||
    getActionsByRuleList(rules[chartType], sentence, data, layout)
  );
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
