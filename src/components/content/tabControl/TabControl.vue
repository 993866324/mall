<template>
  <div class="tab-control">
    <div
      class="tab-item"
      v-for="(item,index) in titles"
      :key="index"
      @click="itemClick(index)"
      :class="{active:currentIndex===index}"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    }
  }
};
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  height: 45px;
  background-color: rgb(244, 244, 244);
  line-height: 45px;
  font-size: 15px;
}
.tab-item {
  flex: 1;
}
.active span {
  color: var(--color-high-text);
  padding-bottom: 5px;
  border-bottom: 2px solid var(--color-high-text);
}
</style>