<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="icon-item"></slot>
    </div>
    <div v-else>
      <slot name="icon-item-active"></slot>
    </div>
    <div :style="textColor">
      <slot name="text-item"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    color: {
      type: String,
      default: "hotpink"
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    }
  },
  computed: {
    isActive() {
      return this.$route.path === this.path;
    },
    textColor() {
      return this.isActive ? { color: this.color } : {};
    }
  }
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 25px;
  height: 25px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>