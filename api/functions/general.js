const actionHelper = require('../helpers/actionHelper');

function changeTitle(title) {
  return actionHelper.updateOneLayout('title', title);
}

module.exports = {
  changeTitle,
};
