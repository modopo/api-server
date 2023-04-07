'use strict';

const { sequelize, Employee, JobTitle } = require('../src/models');

beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.drop({});
});

describe('Testing Job title and employee models', () => {
  test('Create an employee', async () => {
    let title = {
      title: 'mascot',
      perks: 'warmth',
      salary: 20
    }

    let employee = {
      name: 'Bob',
      age: 18,
      employed: true,
      jobTitleId: 1
    }

    let newTitle = await JobTitle.create(title);
    let newEmployee = await Employee.create(employee);

    expect(newTitle.title).toEqual('mascot');
    expect(newEmployee.name).toEqual('Bob');
    expect(newTitle.id).toBeTruthy();
    expect(newEmployee.jobTitleId).toEqual(1);
  })
});

describe('Testing relation', () => {
  test('Read employee with their title', async () => {
    let employee = await Employee.read(1, { include: JobTitle.model});

    console.log('EMPLOYEE: ', employee);
    expect(employee.name).toEqual('Bob');
    expect(employee['Job Title'].title).toEqual('mascot');
  });
});