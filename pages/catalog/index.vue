<template>
  <div class="m-top">
    <Content />
  </div>
</template>

<script>
  import Content from '@/components/product/Content.vue';
  export default {
    components: {
      Content,
    },
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
