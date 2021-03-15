<template>
  <swiper>
    <swiper-item v-for="(item,index) in banner" :key="index">
      <a :href="item.link">
        <img :src="item.image" @load="imageLoad" alt />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper/index";
export default {
  name: "HomeSwiper",
  data() {
    return {
      isLoad: true
    };
  },
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banner: Array
  },
  methods: {
    imageLoad() {
      if (this.isLoad) {
        this.isLoad = false;
        this.$emit("swiperImageLoad");
      }
    }
  }
};
</script>

<style scoped>
</style>