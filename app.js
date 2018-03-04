const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./api/routes');

const app = express();
app.use(bodyParser.json());
const corsOptions = {
  origin: 'http://localhost:4200',
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
};
app.use(cors(corsOptions));
app.use('/', routes);
const port = process.env.PORT || 3000;
app.listen(port);

console.log(`try this:\ncurl http://localhost:${port}`);
module.exports = app;
