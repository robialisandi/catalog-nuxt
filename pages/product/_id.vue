<template>
  <section class="section-detail">
    <div class="container product-detail grid">
      <div class="display-box">
        <img class="display-product-img" :src="item.image" alt="photo" />
      </div>
      <div class="product-info">
        <h2 class="title-product">
          {{ item.title }}
        </h2>
        <div class="ratings-tag"><span>⭐ 4.5</span></div>
        <ul class="info-attributes">
          <li class="info-attribute">
            <span>Lokasi:</span>
            <span>Bandung Timur</span>
          </li>
          <li class="info-attribute">
            <span>Merek:</span>
            <span>ABCD</span>
          </li>
          <li class="info-attribute">
            <span>Kategori:</span>
            <span>{{ item.category }}</span>
          </li>
        </ul>
        <div class="box-price">
          <p class="price">{{ item.price }}</p>
        </div>
        <div class="subheading-text">Deskripsi:</div>
        <div>
          <p class="description-text">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
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
          error({ statusCode: 503, message: 'We have a problem.' });
        }
      }
    },
    head() {
      return {
        title: this.item.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.item.description,
          },
          {
            hid: 'og:description',
            name: 'og:description',
            content: this.item.description,
          },
        ],
      };
    },
  };
</script>

<style></style>
