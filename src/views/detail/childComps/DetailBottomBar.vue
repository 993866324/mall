<template>
  <div class="bottom-bar">
    <div class="item-left">
      <div>
        <i class="icon a"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon b"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon c"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="item-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addToCart() {
      this.$emit("addToCart");
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  background: #fff;
  display: flex;
  line-height: 49px;
  font-size: 14px;
}

.item-left {
  flex: 1;
  display: flex;
  text-align: center;
}
.item-left > div {
  flex: 1;
}

.item-right {
  flex: 1;
  display: flex;
  text-align: center;
}

.cart {
  width: 50%;
  background-color: orange;
  color: black;
}
.buy {
  width: 50%;
  background-color: pink;
  color: white;
}

.icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 0 auto;
  margin-bottom: -10px;
  margin-top: 3px;
  background: url("~@/assets/img/detail/detail_bottom.png") 0 0/100%;
}
.a {
  background-position: 0 -52px;
}
.b {
  background-position: 0 -248px;
}
.c {
  background-position: 0 1px;
}
</style>