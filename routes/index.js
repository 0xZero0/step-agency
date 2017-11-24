var express = require('express');
var superagent = require('superagent');
var router = express.Router();

const host = 'http://schoolinkapi.ezooo.cn:81/API/Steps/';
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/test', function(req,res, next) {
  res.json({success: 'ddddddd'})
})
router.post('/steps/day', function(req, res, next) {
  //const parms = JSON.parse(Object.keys()[0]);
  if (req.body) {
    superagent
    .get(host + 'GetStepRanksByDay.ashx')
    .set('Content-Type', 'application/json;charset=utf-8')
    .query(req.body)
    .end(function (err, response) {
      if (err) {
        res.json({Code: 1, message: '失败'})
      } else {
        res.json(JSON.parse(response.text))
      }
    })
  } else {
    res.json({Code: 1, message: '失败'})
  } 
});
router.post('/steps/week', function(req, res, next) {
  if (req.body) {
    superagent
    .get(host + 'GetStepRanksByWeek.ashx')
    .set('Content-Type', 'application/json;charset=utf-8')
    .query(req.body)
    .end(function (err, response) {
      if (err) {
        res.json({Code: 1, message: '失败'})
      } else {
        res.json(JSON.parse(response.text));
      }
    })
  } else {
    res.json({Code: 1, message: '失败'})
  }
});
router.post('/steps/month', function(req, res, next) {
  if (res.body) {
    superagent
    .get(host + 'GetStepRanksByMonth.ashx')
    .set('Content-Type', 'application/json;charset=utf-8')
    .query(res.body)
    .end(function (err, response) {
      if (err) {
        res.json({Code: 1, message: '失败'})
      } else {
        res.json(JSON.parse(response.text));
      }
    })
  } else {
    res.json({Code: 1, message: '失败'})
  }
  
});

module.exports = router;
