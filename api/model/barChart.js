function changeCategoryOrder(layout, categoryArray, axis = 'xaxis') {
  const axistype = layout[axis];
  const update = {};

  if (axistype && axistype.type !== 'category') {
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
