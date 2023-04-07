'use strict';

const validator = require('./validator');

describe('Test the validator', () => {
  test('Test if id params string exist with number and passes request to next', () => {
    const request = { params: { id: 1 }, method: 'GET', baseUrl: '/employee' };
    const response = {};
    const next = jest.fn();

    validator(request, response, next);
    expect(typeof request.params.id).toEqual('number');
    expect(next).toHaveBeenCalled();
  });

  test('Test if query string does not exist', () => {
    const request = { body: {}, method: 'POST', baseUrl: '/job-title'};
    const response = {};
    const next = jest.fn();

    validator(request, response, next);
    expect(next).toHaveBeenCalledWith('Please input all required information');
  });
});