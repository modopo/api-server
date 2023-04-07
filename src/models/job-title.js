'use strict';

const DataTypes = require('sequelize');

const JobTitle = (sequelize) => sequelize.define("Job Title", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  perks: {
    type: DataTypes.STRING,
    allowNull: false
  },
  salary: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = JobTitle;