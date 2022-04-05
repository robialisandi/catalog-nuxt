<template>
  <div>
    <h3>{{ item.title }}</h3>
    <p>{{ item.description }}</p>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params, error }) {
    try {
      const detailProduct = await $axios.get(`products/${params.id}`);
      return { item: detailProduct.data };
    } catch (err) {
      if (err.response !== undefined) {
        return error({
          statusCode: err.response.status,
          message: err.response.statusText,
        });
      } else {
        error({ statusCode: 503, message: "We have a problem." });
      }
    }
  },
  head() {
    return {
      title: this.item.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.item.description,
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.item.description,
        },
      ],
    };
  },
};
</script>

<style></style>
