const Controller = require('../../lib/controller');
const tagsFacade = require('./facade');

class TagsController extends Controller {}

module.exports = new TagsController(tagsFacade);
