'use strict';

require('dotenv').config();
const server = require('./src/server');
const sequelize = require('./src/models/index');

//syncs up the tables on the database with our models
sequelize.sync()
  .then(() => {
    server.start(process.env.PORT || 3005);
  })
  .catch(err => {
    console.log("SQL CONNECTING ERROR: ", err);
  });

