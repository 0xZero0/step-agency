var express = require('express');
var superagent = require('superagent');
var router = express.Router();

const host = 'http://schoolinkapi.ezooo.cn:81/API/Steps/';
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/steps/day', function(req, res, next) {
  const parms = JSON.parse(Object.keys(req.body)[0]);
  superagent
  .get(host + 'GetStepRanksByDay.ashx')
  .set('Content-Type', 'application/json;charset=utf-8')
  .query(parms)
  .end(function (err, response) {
    if (err) {
      res.json({code: 1, message: '失败'})
    } else {
      res.json(JSON.parse(response.text))
    }
  })
});
router.post('/steps/week', function(req, res, next) {
  const parms = JSON.parse(Object.keys(req.body)[0]);
  superagent
  .get(host + 'GetStepRanksByWeek.ashx')
  .set('Content-Type', 'application/json;charset=utf-8')
  .query(parms)
  .end(function (err, response) {
    if (err) {
      res.json({code: 1, message: '失败'})
    } else {
      res.json(JSON.parse(response.text));
      //do something
    }
  })
});
router.post('/steps/month', function(req, res, next) {
  const parms = JSON.parse(Object.keys(req.body)[0]);
  superagent
  .get(host + 'GetStepRanksByMonth.ashx')
  .set('Content-Type', 'application/json;charset=utf-8')
  .query(parms)
  .end(function (err, response) {
    if (err) {
      res.json({code: 1, message: '失败'})
    } else {
      res.json(JSON.parse(response.text));
      //do something
    }
  })
});

module.exports = router;
