<template>
  <div class="inner">
    <div class="top">
      <img src="" alt="" class="top-left" />
      <div class="top-left-msg">
        <span class="msg-top">用户名</span>
        <span class="msg-mid">VIP</span>
        <span class="msg-bot">等级</span>
      </div>
      <img src="../assets/img/global/详情.png" class="top-right" alt="" />
    </div>
    <div class="mid">
      <ul>
        <li>
          <img src="" alt="" />
          <span>文字示范</span>
        </li>
      </ul>
    </div>
    <div class="bot">
      <div class="bot-bt">
        <span>我的歌单</span>
        <span>收藏歌单</span>
        <span>稍后再听</span>
      </div>
      <div class="music-list">
        <div class="bot-st">
          <span class="">
            我的歌单
            <span>(<i class="music-list-num">?</i>个)</span>
          </span>
          <img src="../assets/img/global/功能列表.png" class="music-list-func" alt="" />
          <img src="../assets/img/global/新建.png" class="music-list-set" alt="" />
        </div>
        <ul class="bot-info">
          <li>
            <img src="" alt="" class="bot-info-topimg" />
            <div class="bot-info-limsg">
              <span class="bot-info-limsg-top">样式文字</span>
              <span class="bot-info-limsg-mid">100首</span>
              <span class="bot-info-limsg-bot">已下载100首</span>
            </div>
            <img src="../assets/img/global/更多.png" class="bot-info-botimg" alt="" />
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.inner {
  color: #333;
  position: relative;
  top: 44px;
  bottom: 49px;
  margin: 0 10px;
  height: 100%;
  margin-top: 30px;
  padding-bottom: 50px;
  overflow: hidden;
  .top {
    height: 60px;
    .top-left {
      float: left;
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
    .top-left-msg {
      float: left;
      display: flex;
      flex-direction: column;
      margin-left: 4px;
      font-size: 14px;
    }
    .top-right {
      float: right;
      margin-top: 10px;
    }
  }
  .mid {
    height: 195px;
    border-radius: 10px;
    background: #ebebeb;
    margin-top: 31px;
    ul {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      li {
        width: 50px;
        height: 70px;
        margin: 20px 0 10px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        img {
          width: 50px;
          height: 50px;
        }
        span {
          margin-top: 4px;
          font-size: 12px;
        }
      }
    }
  }
  .bot {
    margin-top: 38px;
    .bot-bt {
      margin: 0 20px 17px 20px;
      display: flex;
      justify-content: space-between;
      font-size: 16px;
      color: #909090;
    }
    .music-list {
      width: 355px;
      height: 242px;
      border-radius: 10px;
      background: #ebebeb;
      .bot-st {
        font-size: 12px;
        padding: 11px 24px 10px 20px;
        img {
          float: right;
          margin-left: 20px;
        }
      }
      .bot-info {
        display: flex;
        flex-direction: column;
        li {
          height: 60px;
          margin: 10px 22px;
          .bot-info-topimg {
            margin-top: 10px;
            width: 60px;
            height: 60px;
            float: left;
          }
          .bot-info-limsg {
            float: left;
            display: flex;
            flex-direction: column;
            margin-left: 6px;
            .bot-info-limsg-top {
              font-size: 13px;
              color: #333;
              margin-top: 14px;
            }
            .bot-info-limsg-mid {
              font-size: 11px;
              color: #909090;
              margin: 2px 0;
            }
            .bot-info-limsg-bot {
              font-size: 11px;
              color: #909090;
            }
          }
          .bot-info-botimg {
            margin-top: 30px;
            width: 15px;
            height: 15px;
            float: right;
          }
        }
      }
    }
  }
}
</style>