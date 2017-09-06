const p = require('./package.json');
const Router = require('express').Router;
const router = new Router();

router.route('/').get((req, res) => {
  res.json({ version: p.version });
});

router.use('/tags', require('./model/tags/router'));

module.exports = router;