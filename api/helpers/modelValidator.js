var environment = require('./environment');

exports.getChartType = function (data) {
    if (isHistogram(data))
        return environment.histogramString;
    if (isBarChart(data))
        return environment.barChartString;
    if (isLineChart(data))
        return environment.scatterChartString;
    if (isPieChart(data))
        return environment.pieChartString;
    if (isScatterChart(data))
        return environment.scatterChartString;
    return null;
}

function isHistogram(data) {
    if (data.type == environment.histogramString)
        return true;
    return false;
}

function isBarChart(data) {
    if (data.type == environment.barChartString)
        return true;
    return false;
}

function isLineChart(data) {
    if (data.type == environment.scatterChartString)
        return true;
    return false;
}

function isPieChart(data) {
    if (data.type == environment.pieChartString)
        return true;
    return false;
}

function isScatterChart(data) {
    if (data.type == environment.scatterChartString)
        return true;
    return false;
}