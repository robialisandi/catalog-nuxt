<template>
  <div>
    <div class="fixed">
      <header class="header">
        <Logo />
        <Navigation />
        <button class="btn-mobile-nav">
          <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
          <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
        </button>
      </header>
    </div>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
  import Logo from '~/components/Logo.vue';
  import Navigation from '~/components/Navigation.vue';
  export default {
    components: {
      Logo,
      Navigation,
    },
  };
</script>

<style></style>
