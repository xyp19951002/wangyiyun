<template>
  <div class="home">
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <div class="inner">
      <!-- 歌单分类板块 -->
    <ul class="classify">
      <li>
        <img src="" alt="" />
        <span></span>
      </li>
    </ul>
    <!-- 推荐歌单 -->
    <div class="recom">
      <div class="title">
        <span class="recom-title">推荐歌单</span>
        <span class="more-title">查看更多</span>
      </div>
      <ul>
        <li>
          <img src="" alt="" />
          <p></p>
        </li>
      </ul>
    </div>
    <!-- 推荐单曲 -->
    <div class="singlem">
      <div class="title">
        <span class="recom-title">推荐单曲</span>
        <span class="more-title">查看更多</span>
      </div>
      <ul>
        <li>
          <img src="" alt="" />
          <p></p>
        </li>
      </ul>
    </div>
  </div>
    </div>
    
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>
<style lang="scss" scoped>
.home {
  color: #333;
  position: relative;
  top: 44px;
  bottom: 49px;
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 125px;
    text-align: center;
    background-color: #39a9ed;
  }
  .inner {
    margin: 0 10px;
    .classify {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    overflow: hidden;
    margin-top: 26px;
    li{
      display: flex;
      flex-direction: column;
      justify-content: center;
      img{
        width: 50px;
        height: 50px;
      }
      span{
        width: 47px;
        height: 11.5px;
        font-size: 12px;
        margin-top: 2px;
      }
    }
    }
    .recom {
      margin-top: 24.5px;
      .title {
        height: 16px;
        display: flex;
        justify-content: space-between;
        .recom-title {
          font-size: 16px;
          font-weight: 900;
        }
        .more-title {
          font-size: 12px;
        }
      }
      ul {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: nowrap;
        overflow: hidden;
        margin-top: 9.5px;
        li {
          display: flex;
          flex-direction: column;
          justify-content: center;
          img {
            width: 100px;
            height: 100px;
            border-radius: 10px;
          }
          p {
            overflow:hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp:2; 
            -webkit-box-orient:vertical; 
            margin-top: 9px;
          }
        }
      }
    }
    .singlem {
      margin-top: 26.5px;
      .title {
        height: 16px;
        display: flex;
        justify-content: space-between;
        .recom-title {
          font-size: 16px;
          font-weight: 900;
        }
        .more-title {
          font-size: 12px;
        }
      }
      ul {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: nowrap;
        overflow: hidden;
        margin-top: 9.5px;
        li {
          display: flex;
          flex-direction: column;
          justify-content: center;
          img {
            width: 100px;
            height: 120px;
            border-radius: 10px;
          }
          p {
            overflow:hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp:2; 
            -webkit-box-orient:vertical; 
            margin-top: 9px;
          }
        }
      }
    }
  }
}
  
</style>
