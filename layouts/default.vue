<template>
  <div>
    <div class="fixed">
      <header class="header">
        <Logo />
        <Navigation />
        <button class="btn-mobile-nav">
          <i class="icon-mobile-nav fas fa-bars" name="menu-outline"></i>
          <i class="icon-mobile-nav fas fa-times" name="close-outline"></i>
        </button>
      </header>
    </div>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
  import Scriptjs from '@/assets/js/script.js';
  export default {
    mounted() {
      Scriptjs.renderJs();
    },
  };
</script>

<style></style>
