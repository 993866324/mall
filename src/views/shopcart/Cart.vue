<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{$store.state.cartList.length}})</div>
    </nav-bar>

    <scroll ref="scroll" class="content" :pullUpLoad="true" :probeType="3">
      <cart-list />
    </scroll>
    <cart-bottom />
  </div>
</template>

<script>
import CartList from "./childComps/CartList";
import CartBottom from "./childComps/CartBottom";

import NavBar from "@/components/common/navbar/NavBar";
import Scroll from "@/components/common/scroll/Scroll";
export default {
  components: {
    NavBar,
    Scroll,
    CartList,
    CartBottom
  },
  activated() {
    this.$refs.scroll.refresh();
  }
};
</script>

<style scoped>
.nav-bar {
  position: flex;
  background-color: var(--color-tint);
  color: white;
}
#cart {
  height: 100vh;
}
.content {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
</style>