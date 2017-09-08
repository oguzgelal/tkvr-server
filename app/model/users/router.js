const controller = require('./controller');
const Router = require('express').Router;
const router = new Router();

router.route('/login')
  .post((...args) => controller.verifyToken(...args));

module.exports = router;