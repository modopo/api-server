'use strict';

require('dotenv').config();
const sequelize = require('./index');

const Employee = sequelize.define("Employee", {
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
  title: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Employee;