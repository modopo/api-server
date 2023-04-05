'use strict';

require('dotenv');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('db_401', process.env.DB_USER, process.env.DB_PASS, {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  logging: false
})

module.exports = sequelize;