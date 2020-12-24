<template>
  <div class="top">
    <span class="list">
      <img src="../assets/img/global/侧栏.png" alt="" />
    </span>
    <span class="info"
      v-for="(item, index) in msg"
      :key="index"
      :class="{active: index === number}"
      @click="change(index)"
    >{{ item }}</span>
    <span class="search">
      <img src="../assets/img/global/搜索.png" alt="" />
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg:[
        "我的",
        "首页",
        "社区"
      ],
      number: 1
    }
  },
  methods: {
    change(i) {
      this.number = i;
    }
  }
};
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: 44px;
  background: #333;
  color: #909090;
  display: flex;
  justify-content: space-around;
  .list {
    line-height: 55px;
  }
  .info {
    margin-top: 14px;
    width: 36px;
    height: 13px;
    font-size: 14px;
  }
  .search {
    line-height: 55px;
  }
  .active {
    margin-top: 10px;
    font-size: 18px;
    color: #fff;
  }
}
</style>