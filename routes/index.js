var express = require('express');
var router = express.Router();

var pg = require('pg');

pg.defaults.ssl = true;

/* GET home page. */
router.get('/easy', function(req, res, next) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM EasyScores ORDER BY Score DESC LIMIT 100;', function(err, result) {
      done();
      if (err)
       { console.error(err); res.send("Error " + err); }
      else
       { res.send(result.rows); }
    });
  });
});

router.post('/easy', function(req, res, next) {
  var query = "INSERT INTO EasyScores VALUES ('"+req.body.name+"', "+req.body.score+");";
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query(query, function(err, result) {
      done();
      if (err)
       { console.error(err); res.send("Error " + err); }
      else
       { res.send(); }
    });
  });
});


router.get('/hard', function(req, res, next) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM HardScores ORDER BY Score DESC LIMIT 100;', function(err, result) {
      done();
      if (err)
       { console.error(err); res.send("Error " + err); }
      else
       { res.send(result.rows); }
    });
  });
});

router.post('/hard', function(req, res, next) {
  var query = "INSERT INTO HardScores VALUES ('"+req.body.name+"', "+req.body.score+");";
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query(query, function(err, result) {
      done();
      if (err)
       { console.error(err); res.send("Error " + err); }
      else
       { res.send(); }
    });
  });
});

router.get('/', function(req, res, err){
  res.render('index', {title: 'Highscores'});
});


module.exports = router;
