const routes = require('next-routes')();

routes
  .add('/patients/new', '/patients/new')
  .add('/patients/:uint', '/patients/show');

module.exports = routes;
