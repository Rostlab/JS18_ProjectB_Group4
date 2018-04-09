const nlp = require('compromise');
const nlpRules = require('../nlp/nlpRules');
const sentenceRules = require('../nlp/sentenceRules');
const tagRules = require('../nlp/tagRules');
const nlpHelper = require('../helpers/nlpHelper');
const { multirange } = require('multi-integer-range');

nlp.plugin(nlpRules);

/**
 * Get action for the given sentence.
 * @param {any} sentenceRuleList List of sentence rules to check.
 * @param {any} nlpSentence NLP query sentence.
 * @param {any} data Chart.data object.
 * @param {any} layout Chart.layout object.
 * @param {any} traces Traces of chart
 * @returns {any} Action if given sentence applies to given rules. Else returns null.
 */
function getActionsBySentenceRuleList(sentenceRuleList, nlpSentence, data, layout, traces) {
  for (let i = 0; i < sentenceRuleList.length; i++) {
    const rule = sentenceRuleList[i];
    for (let j = 0; j < rule.match.length; j++) {
      if (nlpSentence.has(rule.match[j])) {
        return rule.actions(data, layout, j, nlpSentence);
      }
    }
  }
  return null;
}

/**
 * Get action for the given sentence.
 * @param {any} tagRuleList List of tag rules to check.
 * @param {any} nlpSentence NLP query sentence.
 * @param {any} data Chart.data object.
 * @param {any} layout Chart.layout object.
 * @param {any} traces Traces of chart
 * @returns {any} Action if given sentence applies to given rules. Else returns null.
 */
function getActionsByTagRuleList(tagRuleList, nlpSentence, data, layout, traces) {
  for (let i = 0; i < tagRuleList.length; i++) {
    const rule = tagRuleList[i];

    const matchTags = {};
    const matches = Object.keys(rule.match);

    for (let j = 0; j < matches.length; j++) {
      let tag = `#${matches[j]}`;
      const matchCountRange = multirange(rule.match[matches[j]], { parseUnbounded: true });
      if (tag === '#Label' || tag === '#Label+') {
        const labels = data[0].labels || [];
        tag = tag.replace('#Label', `(${labels.join('|').toLowerCase()})`);
      }

      let match = null;

      if (tag === '#Quotation') {
        match = nlpHelper.getQuotationsContents(nlpSentence.out('text'));
        if (!matchCountRange.has(match.length)) {
          break;
        }
      } else {
        match = nlpSentence.match(tag);
        if (!matchCountRange.has(match.data().length)) {
          break;
        }
      }

      matchTags[matches[j]] = match;
      if (j === matches.length - 1) {
        const matchTraces = nlpSentence.match(`(${Object.keys(traces).join('|')})`);
        const tracesInSentence = matchTraces.out('array');
        const tracesIndexes = tracesInSentence.map(trace => traces[trace]);

        return rule.actions(data, layout, j, matchTags, nlpSentence, tracesIndexes);
      }
    }
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
  if (
    !sentence ||
    !chartType ||
    !sentenceRules[chartType] ||
    !tagRules[chartType] ||
    !data ||
    !layout
  ) {
    return null;
  }

  const nlpSentence = nlp(sentence);
  const traces = {};

  data.forEach((trace, i) => {
    if (trace.name) {
      traces[trace.name.toLowerCase()] = i;
    } else {
      traces[`trace_${i}`] = i;
    }
  });

  // Try matching general rules first then try matching chart type specific rules.
  return (
    getActionsBySentenceRuleList(sentenceRules.general, nlpSentence, data, layout, traces) ||
    getActionsBySentenceRuleList(sentenceRules[chartType], nlpSentence, data, layout, traces) ||
    getActionsByTagRuleList(tagRules.general, nlpSentence, data, layout, traces) ||
    getActionsByTagRuleList(tagRules[chartType], nlpSentence, data, layout, traces)
  );
}

module.exports = {
  getActions,
};
