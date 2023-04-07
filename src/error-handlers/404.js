'use strict';

function error404(request, response, next) {
  if (!['GET', 'POST', 'PUT', 'DELETE'].includes(request.method)) {
    response.status(404).send("404 bad method");
  } else if (!['/employee', '/job-title'].includes(request.baseUrl)) {
    console.log(request.baseUrl);
    response.status(404).send("404 bad path");
  } else {
    next();
  }
}

module.exports = error404;