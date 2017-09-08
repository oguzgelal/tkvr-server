const Facade = require('../../lib/facade');
const kvsSchema = require('./schema');

class KvsFacade extends Facade {}

module.exports = new KvsFacade(kvsSchema);
