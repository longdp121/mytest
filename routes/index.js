var express = require('express');
var router = express.Router();
var db = require('../db/db.json');

console.log(db);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { data: db });
});

module.exports = router;
