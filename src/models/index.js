'use strict';

require('dotenv').config();
const { Sequelize } = require('sequelize');
const SQL_LOCAL_URL = process.env.DB_URL;
const sequelize = new Sequelize(SQL_LOCAL_URL);

const createEmployee = require('./employee.js');
const createJobTitle = require('./job-title.js');
const Collection = require('../../lib/Collection.js');

const EmployeeModel = createEmployee(sequelize);
const JobTitleModel = createJobTitle(sequelize);

JobTitleModel.hasMany(EmployeeModel, {foreignKey: 'jobTitleId', sourceKey: 'id'});
EmployeeModel.belongsTo(JobTitleModel, {foreignKey: 'jobTitleId', targetKey: 'id'});

module.exports = {
  sequelize,
  Employee: new Collection(EmployeeModel),
  JobTitle: new Collection(JobTitleModel)
}