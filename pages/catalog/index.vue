<template>
  <div class="m-top">
    <CatalogContent />
  </div>
</template>

<script>
  export default {
    async asyncData({ store }) {
      try {
        await store.dispatch('product/loadCatalog');
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
    head() {
      return {
        title: 'Katalog',
      };
    },
  };
</script>

<style></style>
