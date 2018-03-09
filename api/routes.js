const express = require('express');

const router = express.Router();
const FunctionController = require('./controllers/functionController');
const NLPController = require('./controllers/nlpController');

// Frontend
router.use(express.static('public'));

// Call function directly
router.post('/api/function/:chartType/:functionName', FunctionController.postRequest);

// NLP API for Project A
router.post('/api/nlp', NLPController.postRequest);

module.exports = router;
