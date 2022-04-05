<template>
  <div class="container">
    <Card v-for="(item, index) in productList" :key="index" :product="item" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Card from "@/components/product/Card";
export default {
  components: { Card },
  computed: {
    ...mapState({
      productList: (state) => state.product.productList,
    }),
  },
};
</script>

<style></style>
