module.exports = {
    updatePlot: function (req, res) {
        console.log(req.params.query);
        console.log(req.body);
        // Apply query on req.body and return updated plot data,
        return res.status(200).json(req.body);
    }
}