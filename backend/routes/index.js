var express = require('express');
const conn = require('../dao/conn.js');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/wyindex",function(req,res,next){
  let sqlSearch = `select * from wy_index`;
  conn.query(sqlSearch, (err, results) => {
      let obj = {
        status:1
      }
      if (err) {
        obj.msg = "失败"
        throw err
      }else{
        obj.status=0;
        obj.result = results;
      }
      res.json(obj);
  })
});
module.exports = router;