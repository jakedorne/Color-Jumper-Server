var express = require('express');
var router = express.Router();

var pg = require('pg');
//var database_url = "postgres://uhythsjzloykmc:63mJHqC21tl6m7SJ0WHBhMz4aP@ec2-23-21-238-76.compute-1.amazonaws.com:5432/daq0tlknrgimqq";
//pg.defaults.ssl = true;
pg.connect(process.env.DATABASE_URL, function(err, client) {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');

  client
    .query('SELECT * FROM EasyScores;')
    .on('row', function(row) {
      console.log(JSON.stringify(row));
    });
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
