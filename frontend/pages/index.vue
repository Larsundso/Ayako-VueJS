<script lang="ts">
import HomePage from "./HomePage.vue";

export default {
  components: {
    HomePage,
  },
};
</script>

<template>
  <div>
    <HomePage />
  </div>
</template>

<style>
body,
html {
  margin-top: 2em;
  background-color: #181818;
  height: 100%;
  font-family: Futura, Trebuchet MS, Arial, sans-serif;
  color: white;
  scroll-behavior: smooth;
  font-size: 1em;
  user-select: none;
  width: 100%;
  overflow-x: hidden;
  overflow: visible;
}

::-webkit-scrollbar {
  width: 0.6rem;
}

::-webkit-scrollbar-track {
  background: #181818;
  border-radius: 0.5rem;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 0.5rem;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.btn {
  text-decoration: none;
  color: white;
  background-color: #3dff56;
  padding: 1em;
  border-radius: 0.5em;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
}

.btn:hover {
  background-color: #29ab39;
}

</style>
