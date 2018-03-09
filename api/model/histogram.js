const actionHelper = require('../helpers/actionHelper');

function set_xbins(layout, start, end, size, nbin)
{
  //retrieve info from div
  var autobinx=false
  if(!start)
    start = layout.xaxis.range[0]
  if(!end)	
    end = layout.xaxis.range[1]
  if(nbin)
    size=(end-start)/nbin
  else if(!size)	
    autobinx = true
    
  var update = {
    autobinx:autobinx,
    xbins: { 
      end: end, 
      start: start,
      size: size
    }
  };
  return actionHelper.updateStyles(update);
}

module.exports = {
  set_xbins,
};
