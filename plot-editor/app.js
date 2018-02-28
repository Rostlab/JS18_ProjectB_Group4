'use strict';

// Simple express setup,
// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// var routes = require('./api/routes');

// var app = express();
// app.use(bodyParser.json());
// var cors_options = {
//   origin: 'http://localhost:4200',
//   credentials: true,
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   methods: ['GET', 'PUT', 'POST', 'DELETE']
// };
// app.use(cors(cors_options));
// app.use('/', routes);
// var port = process.env.PORT || 3000;
// app.listen(port);

// console.log('Server is listening on port %s', port);
// module.exports = app;

// Swagger setup,
var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function (err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
});
