<template>
  <section class="section-list">
    <div class="container grid grid--6-cols">
      <LazyCard
        v-for="(item, index) in catalogList"
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
        catalogList: (state) => state.product.catalogList,
      }),
    },
  };
</script>

<style></style>
