<template>
  <div>
    <nav-bar>
      <div slot="left" class="left" @click="backClick">
        <img src="~@/assets/img/common/back.svg" alt />
      </div>
      <div slot="center" class="titles">
        <div
          @click="itemClick(index)"
          class="titles-item"
          v-for="(item,index) in titles"
          :key="index"
          :class="{active:currentIndex===index}"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    },
    backClick() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.titles {
  display: flex;
  font-size: 15px;
}
.titles-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.left img {
  margin-top: 11px;
}
</style>