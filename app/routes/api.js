/**
 * Created by StevenChapman on 01/05/15.
 */

var ctrl = require('../controllers/myController');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/mycall', ctrl.doSomething);

module.exports = router;
