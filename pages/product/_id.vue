<template>
  <section class="section-detail">
    <Breadcrumb :productTitle="item.title" />
    <div class="container product-detail grid">
      <div class="display-box">
        <img
          class="display-product-img"
          v-lazy="item.image"
          src="@/assets/img/placeholder.png"
          :alt="item.title"
        />
      </div>
      <div class="product-info">
        <h2 class="title-product">
          {{ item.title }}
        </h2>
        <div class="ratings-tag">
          <span>⭐ {{ item.rating.rate }}</span>
        </div>
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
          <p class="price">{{ toCurrencyString(item.price) }}</p>
        </div>
        <div class="subheading-text">Deskripsi:</div>
        <div>
          <p class="description-text">
            Many philosophical debates that began in ancient times are still
            debated today. In one general sense, philosophy is associated with
            wisdom, intellectual culture and a search for knowledge. Easy
            upgrade for faster boot up, shutdown, application load and response
            (As compared to 5400 RPM SATA 2.5” hard drive; Based on published
            specifications and internal benchmarking tests using PCMark vantage
            scores) Boosts burst write performance
          </p>
          <p class="description-text">
            Many philosophical debates that began in ancient times are still
            debated today. In one general sense, philosophy is associated with
            wisdom, intellectual culture and a search for knowledge.
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
