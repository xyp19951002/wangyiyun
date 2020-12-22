const express = require('express');
const conn = require('../dao/conn1');

const router = express.Router(); // 获得路由对象

router.route('/getProducts')
    .get((req, res, next) => {
        let sql = 'select * from product';
        conn.query(sql, (err, result) => {
            if (err) console.log(err);

            let obj = {};
            obj.status = 0;
            obj.result = result;
            res.json(obj);
        });
    });

router.route("/login").get((req,res,next)=>{
  res.json('helloWord1243523');
  console.log(123);
})

module.exports = router; // 路由导出