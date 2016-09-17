var express = require('express');
var router = express.Router();

var pg = require('pg');

pg.defaults.ssl = true;

/* GET home page. */
router.get('/easy', function(req, res, next) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM EasyScores;', function(err, result) {
      done();
      if (err)
       { console.error(err); res.send("Error " + err); }
      else
       { res.render('index', {title: 'Easy HighScores', result: JSON.stringify(result.rows)} ); }
    });
  });
});

router.get('/hard', function(req, res, next) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM HardScores;', function(err, result) {
      done();
      if (err)
       { console.error(err); res.send("Error " + err); }
      else
       { res.render('index', {title: 'Hard Highscores', result: JSON.stringify(result.rows)} ); }
    });
  });
});

router.get('/', function(req, res, err){
  res.render('index', {title: 'Highscores'});
});


module.exports = router;
