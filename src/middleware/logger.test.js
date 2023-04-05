'use strict';

const logger = require('./logger');

describe('Testing the logger', () => {
  test('Check if logger has been called and passes to next', () => {
    const request = { query: { name: 'test'} };
    const response = {};
    const next = jest.fn();

    logger(request, response, next);

    expect(next).toHaveBeenCalled();
  });
});