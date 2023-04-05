'use strict';

require('dotenv').config();
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(`postgres://${process.env.DB_USER}:${process.env.DB_PASS}@localhost:5432/db_401`)

module.exports = sequelize;