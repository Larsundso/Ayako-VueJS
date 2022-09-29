<script lang="ts" setup>
import Contributer from "~~/components/Contributers.vue";
const { data: Contributers } = await useFetch(
  "https://api.ayakobot.com/contributers"
);
</script>

<template>
  <div class="main">
    <img alt="" src="https://cdn.ayakobot.com/website_assets/ayakoLove.png" />
    <div><h1>Creators & Credits</h1></div>

    <div class="contributers">
      <span
        class="contributer"
        v-for="(contributer, i) of Contributers"
        :key="i"
      >
        <Contributer :contributer="contributer" />
      </span>
    </div>
  </div>
</template>

<style scoped>
.contributers {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 10rem;
  row-gap: 2rem;
}

@media (max-width: 1500px) {
  .contributers {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
}

@media (max-width: 700px) and (min-width: 0px) {
  .contributers {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }
}

img {
  width: 8em;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10rem;
}
</style>
