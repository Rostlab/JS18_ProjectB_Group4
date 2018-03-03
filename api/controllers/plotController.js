var ModelValidator = require('./../helpers/modelValidator');
var environment = require('./../helpers/environment');

module.exports = {
    updatePlot: function (req, res) {
        console.log(req.params.query);
        console.log(req.body);
        var chartType = ModelValidator.getChartType(req.body);
        console.log(chartType);
        // Apply query on req.body and return updated plot data,
        return res.status(200).json(req.body);
    }
}

function parseQuery(query, chartType, data) {
    if (chartType == environment.histogramString)
        return parseHistogramQuery(query, data);
    if (chartType == environment.barChartString)
        return parseBarChartQuery(query, data);
    if (chartType == environment.scatterChartString)
        return parseLineChartQuery(query, data);
    if (chartType == environment.pieChartString)
        return parsePieQuery(query, data);
    if (chartType == environment.scatterChartString)
        return parseScatterChatQuery(query, data);
    return data;
}

function parseHistogramQuery(query, data) {
    return data;
}

function parseBarChartQuery(query, data) {
    return data;
}

function parseLineChartQuery(query, data) {
    return data;
}

function parsePieQuery(query, data) {
    return data;
}

function parseScatterChatQuery(query, data) {
    return data;
}