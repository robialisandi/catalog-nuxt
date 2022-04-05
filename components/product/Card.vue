<template>
  <h2>
    <nuxt-link :to="'/product/' + product.id">{{ product.title }}</nuxt-link>
  </h2>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
