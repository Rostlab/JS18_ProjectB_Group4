/**
 * updates order of defined bars.
 * the names should math the categorical axis.
 * it an be any axix(x,y,z)
 * @param {any} layout needs layout object to get axix type.
 * @param {string[]} categoryArray new order of bars.
 * @param {string} axis it defines which axis has the categorical data.
 * @returns {any} Updated layout for the chart.
 */
function changeCategoryOrder(layout, categoryArray, axis = 'xaxis') {
  const axistype = layout[axis];
  const update = {};

  if (!axistype || axistype.type !== 'category') {
    throw new Error('the axis is not type of category');
  }

  update[`${axis}.categoryarray`] = categoryArray;
  return [
    {
      action: 'updateLayout',
      value: update,
    },
  ];
}

module.exports = {
  changeCategoryOrder,
};
