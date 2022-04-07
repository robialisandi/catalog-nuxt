<template>
  <section class="section-list">
    <div class="container grid grid--6-cols">
      <LazyProductCard
        v-for="(item, index) in productList"
        :key="index"
        :product="item"
      />
    </div>
  </section>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    computed: {
      ...mapState({
        productList: (state) => state.product.productList,
      }),
    },
  };
</script>

<style></style>
