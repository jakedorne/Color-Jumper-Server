var express = require('express');
var router = express.Router();

var pg = require('pg');

pg.defaults.ssl = true;

/* GET home page. */
router.get('/', function(req, res, next) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM EasyScores', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.render('index', {title: result.rows} ); }
    });
  });
});

module.exports = router;
