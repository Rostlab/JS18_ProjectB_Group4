const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./api/routes');

const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
const corsOptions = {
  origin: `http://localhost:${port}`,
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
};
app.use(cors(corsOptions));
app.use('/', routes);

app.listen(port);

if (require.main === module) {
  console.log(`Server is listening on port ${port}`);
  console.log(` Visit here: http://localhost:${port}`);
}

module.exports = app;
