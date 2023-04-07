'use strict';

const sequelize = require('../src/models');
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

describe('Testing GET all routes', () => {
  
  test('All employee should be in db', async() => {
    let response = await request.get('/employee');
    expect(response.body.length).toEqual(1);
  });

  test('All job titles should be in db', async() => {
    let response = await request.get('/job-title');
    expect(response.body.length).toEqual(1);
  });
});

describe('Testing GET ID routes', () => {

  test('Read the right employee based on ID', async() => {
    let response = await request.get(`/employee/1`);
    expect(response._body[0].id).toEqual(1);
  })

  test('Read the right job title based on ID', async() => {
    let response = await request.get('/job-title/1');
    expect(response._body[0].id).toEqual(1);
  })
});

describe('Testing POST routes', () => {
  
  test('Creating a employee into the employee table', async() => {
    let data = {
      name: 'another test',
      age: 43,
      employed: false
    }
    
    let response = await request.post('/employee').send(data);
    let received ={
      name: response.body.name,
      age: response.body.age,
      employed: response.body.employed
    }

    expect(received).toEqual(data);
  });

  test('Creating a employee into the employee table', async() => {
    let data = {
      title: 'Manager',
      perks: 'one banana',
      salary: 100000
    }
    
    let response = await request.post('/job-title').send(data);
    let received ={
      title: response.body.title,
      perks: response.body.perks,
      salary: response.body.salary
    }

    expect(received).toEqual(data);
  });
});

describe('Testing DELETE routes', () => {
  
  test('Deleting a employee from the employee table', async() => {
    await request.delete('/employee/2')
    let response = await request.get('/employee/2')
    expect(response.body).toEqual([]);
  });

  test('Deleting a job title from the job title', async() => {
    await request.delete('/job-title/2')
    let response = await request.get('/job-title/2')
    expect(response.body).toEqual([]);
  });
});