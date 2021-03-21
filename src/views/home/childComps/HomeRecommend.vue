<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item,index) in recommend" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div class="recommend-text">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.recommend {
  display: flex;
  height: 120px;
  font-size: 14px;
  text-align: center;
  border-bottom: 10px solid #eee;
}

.recommend-item {
  flex: 1;
}

.recommend img {
  width: 70px;
  height: 70px;
  margin-top: 10px;
}
</style>