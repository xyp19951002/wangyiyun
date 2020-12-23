const mysql = require("mysql");
const pool = mysql.createPool({
  connectionLimit: 10,
  host: '42.192.151.156',
  user: 'wangyiyun',
  password: '123456',
  database: 'wangyiyun',
  port:3306
});

module.exports = pool;
