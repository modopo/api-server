'use strict';

require('dotenv').config();
const { Sequelize } = require('sequelize');
const SQL_LOCAL_URL = process.env.DB_URL;
const SQL_CLOUD_URL = 'postgres://db_401_user:sc5U5L73Rx4NDd6h8RXols77AUq6ou5I@dpg-cgmvhg5269v6fns0vd70-a.oregon-postgres.render.com/db_401'
const sequelize = new Sequelize(SQL_LOCAL_URL || SQL_CLOUD_URL) ;
module.exports = sequelize;