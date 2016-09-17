var express = require('express');
var router = express.Router();

var pg = require('pg');

pg.defaults.ssl = true;
client = pg.connect(process.env.DATABASE_URL);


/* GET home page. */
router.get('/', function(req, res, next) {
  client.query("SELECT * FROM EasyScores")
  .then((result) => res.render('index', { title: result }))

});

module.exports = router;
