const Facade = require('../../lib/facade');
const usersSchema = require('./schema');

class UsersFacade extends Facade {}

module.exports = new UsersFacade(usersSchema);
