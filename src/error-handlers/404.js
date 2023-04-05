'use strict';

function error404(request, response, next) {
  if(request.method !== "GET") {
    response.status(404).send("GET methods only for now");
  } else if (!request.path.includes('/person')) {
    response.status(404).send("No such path");
  } else {
    next();
  }
}

module.exports = error404;