const { get } = require('core-js/fn/dict');
const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
// 连接数据库
mongoose.connect('mongodb://localhost:27017/wangyiyun',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// 判断连接
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('数据库连接成功');
});

// 创建骨架
let playlistswiperSchema = mongoose.Schema({
  title: String,
  count: String,
  imgUrl: String
});

// 创建模型
let playlistswiperModule = mongoose.model('playlistswiper', playlistswiperSchema);

router.get('/playlistswiper',(req, res , next) => {
  // 根据模型查询
  playlistswiperModule.find({}, (err,doc) => {
    if(err) throw err;
    res.json({
      status: 0,
      result: doc
    })
  })
});

module.exports = router;