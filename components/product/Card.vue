<template>
  <nuxt-link :to="'/product/' + product.id" class="card-product">
    <img class="product-img" :src="product.image" alt="Tas photo" />
    <div class="product-content">
      <div class="ratings"><span>⭐ 4.5</span></div>
      <span class="product-categories">{{ product.category }}</span>
      <p class="product-title">
        {{ product.title }}
      </p>
      <h3 class="product-price">{{ product.price }}</h3>
    </div>
  </nuxt-link>
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
