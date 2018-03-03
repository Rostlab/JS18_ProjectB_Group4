var express = require('express');
var router = express.Router();
var ViewerController = require('./../viewer/viewerController');
var PlotController = require('./controllers/plotController');

// Viewer routes,
router.get('', ViewerController.htmlFile);
router.get('/viewer.js', ViewerController.jsFile);

// API for Project A,
router.put('/:query', PlotController.updatePlot);

module.exports = router;