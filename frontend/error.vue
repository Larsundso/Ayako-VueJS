<template>
  <div>
    <NavBar />
    <div class="main">
      <img
        alt="Ayako Pouting"
        src="https://cdn.ayakobot.com/website_assets/ayakopout.png"
      />
      <h1>AyakoBot.com</h1>
      <p>Address not found or under construction</p>
      <NuxtLink to="/" class="button">Take me home!</NuxtLink>
    </div>
    <PageFooter />
  </div>
</template>

<script lang="ts" setup>
import PageFooter from "@/components/PageFooter.vue";
import NavBar from "@/components/NavBar.vue";
</script>

<style scoped>
img {
  width: 8em;
  border-radius: 2em;
}

p {
  display: block;
}

.main {
  padding-top: 5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20rem;
}
</style>
