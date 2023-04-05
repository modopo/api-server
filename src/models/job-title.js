'use strict';

require('dotenv').config();
const sequelize = require('./index');

const JobTitle = sequelize.define("Employee", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  perks: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  salary: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});

module.exports = JobTitle;