<template>
  <top-fix class="top"></top-fix>
  <router-view />
  <bottom-fix class="bottom"></bottom-fix>
</template>
<script>
import TopFix from "../components/TopFix";
import BottomFix from "../components/BottomFix";
export default {
  components: {
    BottomFix,
    TopFix
  }
};
</script>

<style lang="scss" scoped>
#app{
  position: relative;
  .top {
  position: fixed;
  top: 0;
  left: 0;
  }
  .bottom {
    position: fixed;
    bottom: 0;
    left: 0;
  }
}

</style>
