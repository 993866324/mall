<template>
  <div class="cart-list">
    <cart-list-item v-for="(item,index) in $store.state.cartList" :key="index" :itemInfo="item" />
  </div>
</template>

<script>
import CartListItem from "./CartListItem";
export default {
  components: {
    CartListItem
  }
};
</script>

<style scoped>
</style>