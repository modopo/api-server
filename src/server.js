'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const validator = require('./middleware/validator');
const error404 = require('./error-handlers/404');
const error500 = require('./error-handlers/500');
const logger = require('./middleware/logger');

app.use(cors());
app.use(logger);

app.get('/person', validator, (request, response, next) => {
  let obj = {name: request.query.name}
  response.status(200).json(obj);
});


app.use("*", error404);
app.use(error500);


module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Listening on ${port}`);
    })
  }
}
