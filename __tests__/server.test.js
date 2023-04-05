'use strict';

const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);

describe('Testing server behaviour', () => {
  
  test('Test if query has property name with a string value, which should return a JSON data with the name as key value pair', async() => {
    let response = await request.get('/person?name=test');
    let result = { name: 'test' };
    expect(response.body).toEqual(result);
  });

  test('Test a bad route, which should return a 404', async() => {
    let response = await request.get('/test');
    expect(response.status).toEqual(404);
  });

  test('Test a bad method, which should return a 404', async() => {
    let response = 
    await request.post('/person?name=test');
    expect(response.status).toEqual(404);
  })

  test('Test for no value or no name property in query string', async() => {
    let response = await request.get('/person?name=');
    expect(response.status).toEqual(500);
  })
});