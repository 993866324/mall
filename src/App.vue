<template>
  <div>
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from "@/components/content/mainTabBar/MainTabBar";

export default {
  name: "App",
  components: {
    MainTabBar
  }
};
</script>

<style scoped>
@import url("~@/assets/css/base.css");
@import url("~@/assets/css/normalize.css");
</style>