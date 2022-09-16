<template class="main">
  <NavBar/>
  <router-view/>
  <PageFooter/>
</template>

<style scoped>
</style>

<script lang="ts">
import NavBar from './components/NavBar.vue';
import PageFooter from './components/PageFooter.vue';

export default {
  name: 'App',
  created() {
    document.title = 'Ayako';

    let link = document.querySelector("link[rel~='icon']") as unknown as { rel: string, href: string };
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link as unknown as Node);
    }
    link.href = 'https://ayakobot.com/cdn/website_assets/ayako.ico';
  },
  components: {
    NavBar,
    PageFooter,
  },
};
</script>
