const actionHelper = require('../helpers/actionHelper');
/**
 * Changes number of bins either by limiting the axis(by start or end) 
 * or explicitly defining number of bins(nbin) 
 * or size of one bin=(end-start)/nbin
 * @param {any} layout needs layout object to get axix type.
 * @param {string} start new order of bars.
 * @param {string} end it defines which axis has the categorical data.
 * @param {string} size size of one bin=(end-start)/nbin. 
 * @param {string} nbin explicitly defines number of bins.
 * @returns {any} Updated layout for the chart.
 */
function setXbins(layout, start, end, size, nbin) {
  let finalStart = start;
  let finalEnd = end;
  let finalSize = size;

  const autobinx = false;

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
      finalSize = (finalEnd - finalStart) / 5;
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
