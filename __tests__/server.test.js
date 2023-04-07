'use strict';

const { sequelize } = require('../src/models');
const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);
const seed = require('../seed');

beforeAll(async () => {
  await seed();
});

afterAll(async () => {
  await sequelize.drop({});
});

describe('Testing GET all entries routes', () => {

  test('All employee should be in db', async () => {
    let response = await request.get('/employee');
    expect(response.body.length).toEqual(1);
  });

  test('All job titles should be in db', async () => {
    let response = await request.get('/job-title');
    expect(response.body.length).toEqual(1);
  });
});

describe('Testing GET specific entry via IDs routes', () => {

  test('Read the right employee based on ID', async () => {
    let response = await request.get(`/employee/1`);
    expect(response.body.name).toEqual('Jeff Bezos');
  })

  test('Read the right job title based on ID', async () => {
    let response = await request.get('/job-title/1');
    expect(response.body.title).toEqual('CEO');
  })
});

describe('Testing POST routes', () => {

  test('Creating a employee into the employee table', async () => {
    let data = {
      name: 'Andy Jassy',
      age: 43,
      employed: true,
      jobTitleId: 1
    }

    let response = await request.post('/employee').send(data);
    let received = {
      name: response.body.name,
      age: response.body.age,
      employed: response.body.employed,
      jobTitleId: response.body.jobTitleId
    }

    expect(received).toEqual(data);
  });

  test('Creating a title into the job title table', async () => {
    let data = {
      title: 'Intern',
      perks: 'hot dog',
      salary: 50000
    }

    let response = await request.post('/job-title').send(data);
    let received = {
      title: response.body.title,
      perks: response.body.perks,
      salary: response.body.salary
    }

    expect(received).toEqual(data);
  });
});

describe('Testing PUT routes', () => {

  test('Updating employee in the employee table', async () => {
    let toBeUpdated = await request.get('/employee/2');
    toBeUpdated.body.employed = false;
    await request.put('/employee/2').send(toBeUpdated.body);
    let updated = await request.get('/employee/2');
    expect(updated.body.employed).toEqual(false);
  });

  test('Updating a title in the job title table', async () => {
    let toBeUpdated = await request.get('/job-title/2');
    toBeUpdated.body.salary = 0;
    await request.put('/job-title/2').send(toBeUpdated.body);
    let updated = await request.get('/job-title/2');
    expect(updated.body.salary).toEqual(0);
  });
});

describe('Testing DELETE routes', () => {

  test('Deleting a employee from the employee table', async () => {
    await request.delete('/employee/1')
    let response = await request.get('/employee/1')
    expect(response.body).toEqual(null);
  });

  test('Deleting a job title from the job title', async () => {
    await request.delete('/job-title/1');
    let response = await request.get('/job-title/1')
    expect(response.body).toEqual(null);
  });
});