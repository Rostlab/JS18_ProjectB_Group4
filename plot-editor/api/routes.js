var express = require('express');
var router = express.Router();
var ViewerController = require('./../viewer/viewerController');

// Viewer routes,
router.get('', ViewerController.htmlFile);
router.get('/viewer.js', ViewerController.jsFile);

module.exports = router;