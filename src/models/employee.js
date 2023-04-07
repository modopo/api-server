'use strict';

const DataTypes = require('sequelize');

const Employee = (sequelize) => sequelize.define("Employee", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  employed: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },  
  jobTitleId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Employee;