'use strict';

/** Populate database with initial data for testing **/

const sequelize = require('./src/models/index');
const Employee = require('./src/models/employee');
const JobTitle = require('./src/models/job-title');


function init() {
  //Creates a test Employee object
  sequelize.sync().then(async () => {
    let newEmployee = await Employee.create({
      name: "someTest",
      age: 30,
      employed: true
    })
  }).catch(error => console.log(error));

  //Creates a test User object
  sequelize.sync().then(async () => {
    let newTitle = await JobTitle.create({
      title: "CEO",
      perks: "Free coffee",
      salary: 500000
    })

  }).catch(error => console.log(error));

}

module.exports = init;