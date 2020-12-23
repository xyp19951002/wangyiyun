<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { getwyindex } from "../utils/api";
export default {
  data() {
    return {
      reco_count: 0
    };
  },
  mounted() {
    getwyindex().then(res => console.log(res));
  }
};
</script>
