'use strict';

function error404(request, response, next) {
  if (!['GET', 'POST', 'PUT', 'DELETE'].includes(request.method)) {
    response.status(404).send("404 bad method");
  } else if (!request.path.includes('/employee' || !request.path.includes('/job-title'))) {
    response.status(404).send("404 bad path");
  } else {
    next();
  }
}

module.exports = error404;