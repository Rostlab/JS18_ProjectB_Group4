
function changeCategoryOrder(layout, categoryArray ,axis="xaxis") {
  var axistype= layout[axis];
  if(axistype && axistype.type!="category")
    throw "error! the axis is not type of category.";
  
  var update = {};
  update[axis+'.categoryarray']= categoryArray;
  
  return [
    {
      action: "updateLayout",
      value: update
    }
  ];
}

module.exports = {
  changeCategoryOrder,
};
