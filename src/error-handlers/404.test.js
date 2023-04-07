const server = require('../../src/server');
const supertest = require('supertest');
const request = supertest(server.app);

describe('Testing 404 errors', () => {
  test('404 bad method', async() => {
    let response = await request.patch('/employee');
    expect(response.status).toEqual(404);
    expect(response.body).toEqual({});
  });

  test('404 bad path', async() => {
    let response = await request.get('/taco');
    expect(response.status).toEqual(404);
    expect(response.body).toEqual({});
  });
});