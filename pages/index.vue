<template>
  <div>
    <Hero />
    <ProductContent />
    <Testimonials />
  </div>
</template>

<script>
  export default {
    layout: 'home',
    async asyncData({ store }) {
      try {
        await store.dispatch('product/loadProducts');
      } catch (err) {
        if (err.response !== undefined) {
          return error({
            statusCode: err.response.status,
            message: err.response.statusText,
          });
        } else {
          error({ statusCode: 503, message: 'We have a problem.' });
        }
      }
    },
  };
</script>

<style></style>
