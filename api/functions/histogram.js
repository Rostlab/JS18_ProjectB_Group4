const actionHelper = require('../helpers/actionHelper');

function setXbins(layout, start, end, size, nbin) {
  let finalStart = start;
  let finalEnd = end;
  let finalSize = size;

  let autobinx = false;

  if (!finalStart) {
    const [startRange, endRange] = layout.xaxis.range;
    finalStart = startRange;
  }
  if (!finalEnd) {
    const [startRange, endRange] = layout.xaxis.range;
    finalEnd = endRange;
  }
  if (nbin) {
    finalSize = (finalEnd - finalStart) / nbin;
  } else if (!finalSize) {
    autobinx = true;
  }
  const update = {
    autobinx,
    xbins: {
      end: finalEnd,
      start: finalStart,
      size: finalSize,
    },
  };
  return actionHelper.updateStyles(update);
}

module.exports = {
  setXbins,
};
