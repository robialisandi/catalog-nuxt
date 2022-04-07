<template>
  <div class="container">
    <ul class="breadcrumb">
      <li><nuxt-link to="/">Beranda</nuxt-link></li>
      <li><nuxt-link to="/catalog">Produk</nuxt-link></li>
      <li>{{ productTitle }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      productTitle: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style></style>
