var express = require('express');
var router = express.Router();
var Hello = require('./controllers/hello_world');

router.get('', Hello.hello);

module.exports = router;