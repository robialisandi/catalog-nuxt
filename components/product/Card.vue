<template>
  <nuxt-link :to="'/product/' + product.id" class="card-product">
    <div class="card-img">
      <img
        class="product-img"
        v-lazy="product.image"
        src="@/assets/img/placeholder.png"
        :alt="product.item"
      />
    </div>
    <div class="product-content">
      <div class="ratings"><span>⭐ 4.5</span></div>
      <span class="product-categories">{{ product.category }}</span>
      <p class="product-title">
        {{ product.title }}
      </p>
      <h3 class="product-price">{{ toCurrencyString(product.price) }}</h3>
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
    methods: {
      toCurrencyString(number) {
        return number.toLocaleString('id-ID', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 0,
        });
      },
    },
  };
</script>

<style></style>
