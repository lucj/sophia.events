var express = require('express');
var router  = express.Router();
var events  = require('../middlewares/events');

/* GET events listing. */
router.get('/', events.getAll);

module.exports = router;
