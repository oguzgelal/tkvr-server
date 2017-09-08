const Controller = require('../../lib/controller');
const usersFacade = require('./facade');

class UsersController extends Controller {}

module.exports = new UsersController(usersFacade);
