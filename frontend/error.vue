<template>
  <div>
    <NavBar />
    <div class="main">
      <img
        alt="Ayako Pouting"
        src="https://cdn.ayakobot.com/website_assets/ayakopout.png"
      />
      <div><h1>AyakoBot.com</h1></div>
      <div><h3>Address not found or under construction</h3></div>
      <NuxtLink to="/" class="btn">Take me home!</NuxtLink>
    </div>
    <PageFooter />
  </div>
</template>

<script>
import PageFooter from "./componets/PageFooter.vue";
import NavBar from "./componets/NavBar.vue";
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

.main {
  padding-top: 5em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

button {
  padding: 1em;
  margin-top: 1em;
  background-color: #3dff56;
  border: none;
  color: #18181b;
  font-weight: bold;
  border-radius: 0.5em;
  transition: background-color 0.2s ease-in-out;
}

button:hover {
  background-color: #29ab39;
  color: #d3d3ec;
}
</style>
