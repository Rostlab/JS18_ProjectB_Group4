const express = require('express');

const router = express.Router();
const ViewerController = require('./controllers/viewerController');
const PlotController = require('./controllers/plotController');

// Viewer routes,
router.use(express.static("public"));
router.get('/getUpdate', ViewerController.getUpdate);

// API for Project A,
router.put('/:query', PlotController.updatePlot);

module.exports = router;
