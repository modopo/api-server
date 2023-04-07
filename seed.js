'use strict';

const { Employee, JobTitle, sequelize } = require('./src/models');

async function init() {
  await sequelize.sync().then(async () => {
    let newTitle = await JobTitle.create({
      title: "CEO",
      perks: "Free coffee",
      salary: 500000
    })

    let newEmployee = await Employee.create({
      name: "Jeff Bezos",
      age: 58,
      employed: false,
      jobTitleId: 1
    })
  }).catch(error => console.log(error));

}

module.exports = init;