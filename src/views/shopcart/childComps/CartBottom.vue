<template>
  <div class="cart-bottom">
    <div>
      <label for="bottom-ipt" class="bottom-ipt">
        <input :checked="isSelectAll" type="checkbox" id="bottom-ipt" @click="iptClick" />
        <span>全选</span>
      </label>
    </div>
    <div class="total">合计:￥{{totalPrice}}</div>
    <div class="right">去计算({{checkLength}})</div>
  </div>
</template>

<script>
export default {
  methods: {
    iptClick() {
      if (this.isSelectAll) {
        this.$store.state.cartList.map(item => (item.checked = false));
      } else {
        this.$store.state.cartList.map(item => (item.checked = true));
      }
    }
  },
  computed: {
    totalPrice() {
      return this.$store.state.cartList
        .filter(n => n.checked === true)
        .reduce((preValue, item) => {
          return item.price * item.count + preValue;
        }, 0)
        .toFixed(2);
    },
    checkLength() {
      return this.$store.state.cartList.filter(n => n.checked == true).length;
    },
    isSelectAll() {
      if (!this.checkLength) return false;
      return !this.$store.state.cartList.filter(item => !item.checked).length;
    }
  }
};
</script>

<style scoped>
.cart-bottom {
  display: flex;
  position: relative;
  bottom: 40px;
  height: 40px;
  background-color: #eee;
  line-height: 40px;
}
.total {
  flex: 1;
}
#bottom-ipt {
  margin: 0 5px;
}
.bottom-ipt {
  display: inline-block;
  margin: 0 5px;
  width: 60px;
}

.right {
  background-color: orange;
  width: 90px;
  text-align: center;
}
</style>