const p = require('../package.json');
const Router = require('express').Router;
const router = new Router();

router.route('/').get((req, res) => {
  res.json({ version: p.version });
});

router.use('/users', require('./model/users/router'));
router.use('/kvs', require('./model/kvs/router'));

module.exports = router;