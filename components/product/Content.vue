<template>
  <section class="section-list">
    <div class="container grid grid--6-cols">
      <Card v-for="(item, index) in productList" :key="index" :product="item" />
    </div>
  </section>
</template>

<script>
  import { mapState } from 'vuex';
  import Card from '@/components/product/Card';
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
