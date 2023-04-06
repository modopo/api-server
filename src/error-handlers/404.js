'use strict';

function error404(request, response, next) {
  //Checks if request has a bad method
  if (!['GET', 'POST', 'PUT', 'DELETE'].includes(request.method)) {
    response.status(404).send("404 bad method");
  
  //Checks if request path is invalid
  } else if (!request.path.includes('/employee' || !request.path.includes('/job-title'))) {
    response.status(404).send("404 bad path");
  } else {
    next();
  }
}

module.exports = error404;