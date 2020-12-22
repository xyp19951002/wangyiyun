// 连接数据库，用mongoDB

const mongodbClient = require('mongodb').MongoClient;
const url = "mongodb:\\127.0.0.1:27017";
const pool = mongodbClient.connect(url,(err,client)=>{
    if(err) {
        console.log("连接错误");
    }else {
        console.log("连接成功");
    }
});

module.exports = pool;