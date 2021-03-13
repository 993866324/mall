<template>
  <div id="home">
    <!-- banner -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 轮播图 -->
    <home-swiper class="home-swiper" :banner="banners" />

    <!-- Recommend -->
    <home-recommend :recommend="recommends" />

    <!-- Feature -->
    <home-feature />

    <!-- 导航 -->
    <tab-control class="tab-control" :titles="['流行','新款','精选']" />

    <ul>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
      <li>数列</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import HomeFeature from "./childComps/HomeFeature";
import TabControl from "@/components/content/tabControl/TabControl";

import { getHomeMultidata } from "@/network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl
  },
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  }
};
</script>

<style scoped>
.home-nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
  background-color: var(--color-tint);
  color: white;
  font-style: 16px;
}
.tab-control {
  position: sticky;
  top: 44px;
}
.home-swiper {
  margin-top: 44px;
}
</style>