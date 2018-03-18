const actionHelper = require('../helpers/actionHelper');

function changeTitle(title) {
  return actionHelper.updateOneLayout('title', title);
}

function hideLegend() {
  return actionHelper.updateOneLayout('showlegend', false);
}

function showLegend() {
  return actionHelper.updateOneLayout('showlegend', true);
}

function changeLegendPosition(x, y) {
  const update = {};
  update.x = x;
  update.y = y;
  return actionHelper.updateOneLayout('legend', update);
}

module.exports = {
  changeTitle,
  showLegend,
  hideLegend,
  changeLegendPosition,
};
