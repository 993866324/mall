<template>
  <div id="detail">
    <detail-nav-bar @navBarClick="navBarClick" ref="nav" />
    <scroll class="content" :probeType="3" :pullUpLoad="true" ref="scroll" @scroll="contentScroll">
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detailInfo="detailInfo" @imagesLoad="imagesLoad" />
      <detail-param-info ref="params" :paramInfo="paramInfo" />
      <detail-comment ref="comment" />
      <detail-recommend ref="recommend" />
    </scroll>
    <back-top v-show="isShowBackTop" @click.native="backClick" />
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailRecommend from "./childComps/DetailRecommend";
import DetailComment from "./childComps/DetailComment";
import BackTop from "@/components/content/backTop/BackTop";
import Scroll from "@/components/common/scroll/Scroll";
import { getDetail, Goods, Shop, GoodsParam } from "@/network/detail";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    BackTop,
    DetailRecommend,
    DetailComment
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      isShowBackTop: false,
      commentInfo: {},
      themeTopYs: [],
      currentIndex: 0
    };
  },
  created() {
    // 保存传入的iid
    this.iid = this.$route.params.iid;
    /// 通过iid请求详情数据
    getDetail(this.iid).then(res => {
      const data = res.result;
      // 获取轮播图图片
      this.topImages = data.itemInfo.topImages;
      // 获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 获取店铺信息
      this.shop = new Shop(data.shopInfo);
      // 获取详情图片
      this.detailInfo = data.detailInfo;
      // 获取参数
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.cRate[0];
      }
    });
  },
  updated() {},
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      const pY = -position.y;
      const tY = this.themeTopYs;
      this.isShowBackTop = pY > 1500;
      let length = this.themeTopYs.length;
      for (let i = 0; i < length; i++) {
        if (
          this.currentIndex !== i &&
          ((i < length - 1 && pY >= tY[i] && pY < tY[i + 1]) ||
            (i === length - 1 && pY >= tY[i]))
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
    },
    navBarClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200);
    },
    imagesLoad() {
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
    }
  }
};
</script>

<style scoped>
#detail {
  height: 100vh;
  position: relative;
  z-index: 100;
  background-color: #fff;
}
.content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
</style>