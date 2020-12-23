<template>
  <div class="top">
    <span class="list"></span>
    <span class="info"
      v-for="(item, index) in msg"
      :key="index"
    >{{ item }}</span>
    <span class="search"></span>
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
      ]
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
  .info {
    width: 27.5px;
    height: 13px;
    font-size: 14px;
  }
}
</style>