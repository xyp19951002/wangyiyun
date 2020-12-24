<template>
  <div class="bottom">
    <div class="inner">
      <img src="" class="show" alt="" />
      <span class="title"></span>
      <span class="play">
        <img src="../assets/img/global/播放键.png" alt="">
      </span>
      <span class="list">
        <img src="../assets/img/global/歌单列表.png" alt="">
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bottom {
  width: 100%;
  height: 49px;
  background: #333;
  .inner {
    margin: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 6px;
    .show {
      width: 36px;
      height: 36px;
      border-radius: 50%;
    }
    .title {
      color: #fff;
      width: 224px;
      height: 14px;
      font-size: 13px;
    }
    .play {
      width: 25px;
      height: 25px;
    }
    .list {
      width: 25px;
      height: 25px;
    }
  }
}
</style>
