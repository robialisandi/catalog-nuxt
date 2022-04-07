<template>
  <div>
    <header class="header hero-header-color">
      <Logo />
      <Navigation />
      <button class="btn-mobile-nav">
        <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
        <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
      </button>
    </header>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
  import Logo from '~/components/Logo.vue';
  import Navigation from '~/components/Navigation.vue';
  import Scriptjs from '@/assets/js/script.js';
  export default {
    components: {
      Logo,
      Navigation,
    },
    mounted() {
      Scriptjs.renderJs();
    },
  };
</script>

<style></style>
