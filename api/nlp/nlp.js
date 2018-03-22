const nlp = require('compromise');
const nlpRules = require('../nlp/nlpRules');
const sentenceRules = require('../nlp/sentenceRules');
const tagRules = require('../nlp/tagRules');

nlp.plugin(nlpRules);

/**
 * Get action for the given sentence.
 * @param {any} sentenceRuleList List of sentence rules to check.
 * @param {any} nlpSentence NLP query sentence.
 * @param {any} data Chart.data object.
 * @param {any} layout Chart.layout object.
 * @returns {any} Action if given sentence applies to given rules. Else returns null.
 */
function getActionsBySentenceRuleList(sentenceRuleList, nlpSentence, data, layout) {
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
 * @returns {any} Action if given sentence applies to given rules. Else returns null.
 */
function getActionsByTagRuleList(tagRuleList, nlpSentence, data, layout) {
  for (let i = 0; i < tagRuleList.length; i++) {
    const rule = tagRuleList[i];
    for (let j = 0; j < rule.match.length; j++) {
      const matchTags = {};
      for (let k = 0; k < rule.match[j].length; k++) {
        let tag = `#${rule.match[j][k]}`;
        if (tag === '#ValueLabel' || tag === '#ValueLabel+') {
          const labels = data[0].labels || [];
          tag = tag.replace('#ValueLabel', `(${labels.join('|').toLowerCase()})`);
        }
        const match = nlpSentence.match(tag);
        if (!match.out().trim()) {
          break;
        }
        matchTags[rule.match[j][k]] = match;
        if (k === rule.match[j].length - 1) {
          return rule.actions(data, layout, j, matchTags, nlpSentence);
        }
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
  const nlpSentence = nlp(sentence);

  if (!sentenceRules[chartType] || !tagRules[chartType] || !chartType || !data || !layout) {
    return null;
  }

  // Try matching general rules first then try matching chart type specific rules.
  return (
    getActionsBySentenceRuleList(sentenceRules.general, nlpSentence, data, layout) ||
    getActionsBySentenceRuleList(sentenceRules[chartType], nlpSentence, data, layout) ||
    getActionsByTagRuleList(tagRules.general, nlpSentence, data, layout) ||
    getActionsByTagRuleList(tagRules[chartType], nlpSentence, data, layout)
  );
}

module.exports = {
  getActions,
};
