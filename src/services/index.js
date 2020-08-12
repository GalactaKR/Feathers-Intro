const users = require('./users/users.service.js')
const hello = require('./hello/hello.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users)
  app.configure(hello);
}
