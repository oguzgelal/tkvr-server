const Controller = require('../../lib/controller');
const kvsFacade = require('./facade');

class KvsController extends Controller {}

module.exports = new KvsController(kvsFacade);
