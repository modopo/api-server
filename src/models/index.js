'use strict';

require('dotenv').config();
const { Sequelize } = require('sequelize');
const SQL_LOCAL_URL = process.env.DB_URL || 'sqlite:memory:';

//make database connection
const sequelize = new Sequelize(SQL_LOCAL_URL) ;
module.exports = sequelize;