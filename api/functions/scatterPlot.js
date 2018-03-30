const actionHelper = require('../helpers/actionHelper');

/**
 * Change symbol of marker
 * @param {string} symbol can be one of these
 * circle, circle-open, circle-dot, circle-open-dot,
 * square, square-open, square-dot, square-open-dot,
 * diamond, diamond-open, diamond-dot, diamond-open-dot,
 * cross, cross-open, cross-dot, cross-open-dot,
 * x, x-open, x-dot, x-open-dot,
 * triangle-up, triangle-up-open, triangle-up-dot, triangle-up-open-dot,
 * triangle-down, triangle-down-open, triangle-down-dot, triangle-down-open-dot,
 * triangle-left, triangle-left-open, triangle-left-dot, triangle-left-open-dot,
 * triangle-right, triangle-right-open, triangle-right-dot, triangle-right-open-dot,
 * triangle-ne, triangle-ne-open, triangle-ne-dot, triangle-ne-open-dot,
 * triangle-se, triangle-se-open, triangle-se-dot, triangle-se-open-dot,
 * triangle-sw, triangle-sw-open, triangle-sw-dot, triangle-sw-open-dot,
 * triangle-nw, triangle-nw-open, triangle-nw-dot, triangle-nw-open-dot,
 * pentagon, pentagon-open, pentagon-dot, pentagon-open-dot,
 * hexagon, hexagon-open, hexagon-dot, hexagon-open-dot,
 * hexagon2, hexagon2-open, hexagon2-dot, hexagon2-open-dot,
 * octagon, octagon-open, octagon-dot, octagon-open-dot,
 * star, star-open, star-dot, star-open-dot,
 * hexagram, hexagram-open, hexagram-dot, hexagram-open-dot,
 * star-triangle-up, star-triangle-up-open, star-triangle-up-dot, star-triangle-up-open-dot,
 * star-triangle-down, star-triangle-down-open, star-triangle-down-dot, star-triangle-down-open-dot,
 * star-square, star-square-open, star-square-dot, star-square-open-dot,
 * star-diamond, star-diamond-open, star-diamond-dot, star-diamond-open-dot,
 * diamond-tall, diamond-tall-open, diamond-tall-dot, diamond-tall-open-dot,
 * diamond-wide, diamond-wide-open, diamond-wide-dot, diamond-wide-open-dot,
 * hourglass, hourglass-open,
 * bowtie, bowtie-open,
 * circle-cross, circle-cross-open, circle-x, circle-x-open,
 * square-cross, square-cross-open, square-x, square-x-open,
 * diamond-cross, diamond-cross-open, diamond-x, diamond-x-open,
 * cross-thin, cross-thin-open,
 * x-thin, x-thin-open,
 * asterisk, asterisk-open,
 * hash, hash-open, hash-dot, hash-open-dot,
 * y-up, y-up-open, y-down, y-down-open,
 * y-left, y-left-open, y-right, y-right-open,
 * line-ew, line-ew-open, line-ns, line-ns-open, line-ne, line-ne-open, line-nw, line-nw-open
 * @param {*} trace traces we wanted to update
 * @returns {any} update style actions
 */
function changeMarkerSymbol(symbol, trace) {
  return actionHelper.updateOneStyle('marker.symbol', symbol, trace);
}

/**
 * Change size of marker
 * @param {number} size have to be greater than or equal to 0
 * @param {*} trace traces we wanted to update
 * @returns {any} update style actions
 */
function changeMarkerSize(size, trace) {
  return actionHelper.updateOneStyle('marker.size', size, trace);
}

/**
 * Change marker size by multiplier
 * New marker size will be old marker size multiply by the multiplier
 * @param {*} data plotly data object
 * @param {number} multiplier have to be greater than 0
 * @param {*} trace traces we wanted to update
 * @returns {any} update style actions
 */
function changeMarkerSizeBy(data, multiplier, trace) {
  let result = [];

  data.forEach((dataTrace, i) => {
    if (!trace || trace.length === 0 || i in trace) {
      const oldSize = (dataTrace.marker && dataTrace.marker.size) ? dataTrace.marker.size : 6;
      result = result.concat(actionHelper.updateOneStyle('marker.size', oldSize * multiplier, trace));
    }
  });

  return result;
}

/**
 * Change opacity of marker
 * @param {number} opacity can be  in this interval [0, 1]
 * @param {any} trace traces we wanted to update
 * @returns {any} update style actions
 */
function changeMarkerOpacity(opacity, trace) {
  return actionHelper.updateOneStyle('marker.opacity', opacity, trace);
}

/**
 * Change color of marker
 * @param {string} color html color (hex or name)
 * @param {any} trace traces we wanted to update
 * @returns {any} update style actions
 */
function changeMarkerColor(color, trace) {
  return actionHelper.updateOneStyle('marker.color', color, trace);
}

/**
 * Change color of line
 * @param {string} color html color (hex or name)
 * @param {any} trace traces we wanted to update
 * @returns {any} update style actions
 */
function changeLineColor(color, trace) {
  return actionHelper.updateOneStyle('line.color', color, trace);
}

/**
 * Change width of line
 * @param {number} width have to be greater than or equal to 2
 * @param {any} trace traces we wanted to update
 * @returns {any} update style actions
 */
function changeLineWidth(width, trace) {
  return actionHelper.updateOneStyle('line.width', width, trace);
}

/**
 * Change shape of line
 * @param {string} shape can be linear, spline, hv, vh, hvh, vhv
 * @param {any} trace traces we wanted to update
 * @returns {any} update style actions
 */
function changeLineShape(shape, trace) {
  return actionHelper.updateOneStyle('line.shape', shape, trace);
}

/**
 * Change line smoothing factor
 * Note: only have effect when shape is spline
 * @param {number} smoothing can be in this interval [0, 1.3]
 * @param {any} trace traces we wanted to update
 * @returns {any} update style actions
 */
function changeLineSmoothing(smoothing, trace) {
  return actionHelper.updateOneStyle('line.smoothing', smoothing, trace);
}

/**
 * Change line dash type
 * @param {string} dash can be solid, dot, dash, longdash, dashdot, longdashdot
 * or a dash length list in px (eg "5px,10px,2px,2px")
 * @param {any} trace traces we wanted to update
 * @returns {any} update style actions
 */
function changeLineDash(dash, trace) {
  return actionHelper.updateOneStyle('line.dash', dash, trace);
}

/**
 * Change mode of scatter
 * @param {string} mode can be lines, markers, text
 * or combination of those joined with "+" such as
 * "lines", "markers", "lines+markers", "lines+markers+text"
 * or "none"
 * @param {any} trace traces we wanted to update
 * @returns {any} update style actions
 */
function changeScatterMode(mode, trace) {
  return actionHelper.updateOneStyle('mode', mode, trace);
}

module.exports = {
  changeMarkerSymbol,
  changeMarkerSize,
  changeMarkerSizeBy,
  changeMarkerOpacity,
  changeMarkerColor,
  changeLineColor,
  changeLineWidth,
  changeLineShape,
  changeLineSmoothing,
  changeLineDash,
  changeScatterMode,
};
