const Facade = require('../../lib/facade');
const tagsSchema = require('./schema');

class TagsFacade extends Facade {}

module.exports = new TagsFacade(tagsSchema);
