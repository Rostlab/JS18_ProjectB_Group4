const express = require('express');

const router = express.Router();
const ViewerController = require('./../viewer/viewerController');
const PlotController = require('./controllers/plotController');

// Viewer routes,
router.get('', ViewerController.htmlFile);
router.get('/viewer.js', ViewerController.jsFile);
router.get('/getUpdate', ViewerController.getUpdate);

// API for Project A,
router.put('/:query', PlotController.updatePlot);

module.exports = router;
