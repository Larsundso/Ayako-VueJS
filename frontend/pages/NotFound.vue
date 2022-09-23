<template>
  <div class="main">
    <img
      alt="Ayako Pouting"
      src="https://cdn.ayakobot.com/website_assets/ayakopout.png"
    />
    <div><h1>AyakoBot.com</h1></div>
    <div><h3>Address not found or under construction</h3></div>
    <NuxtLink to="/">Take me back!</NuxtLink>
  </div>
</template>

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

NuxtLink {
  padding: 1em;
  margin-top: 1em;
  background-color: #3dff56;
  border: none;
  color: #18181b;
  font-weight: bold;
  border-radius: 0.5em;
  transition: background-color 0.2s ease-in-out;
}

NuxtLink:hover {
  background-color: #29ab39;
  color: #d3d3ec;
}
</style>
