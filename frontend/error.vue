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
      <NuxtLink to="/" class="btn">Take me home!</NuxtLink>
    </div>
    <PageFooter />
  </div>
</template>

<script lang="ts">
import PageFooter from "@/components/PageFooter.vue";
import NavBar from "@/components/NavBar.vue";
export default {
  props: ["error"],
  layout: "error",
  components: { PageFooter, NavBar },
};
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

.btn {
  text-decoration: none;
  padding: 1em;
  margin-top: 1em;
  background-color: #3dff56;
  border: none;
  color: #18181b;
  font-weight: bold;
  border-radius: 0.5em;
  transition: background-color 0.2s ease-in-out;
}

.btn:hover {
  background-color: #29ab39;
  color: #d3d3ec;
}
</style>
