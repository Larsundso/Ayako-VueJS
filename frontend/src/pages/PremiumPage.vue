<script>
export default {
  methods: {
    donate() {
      window.open(
        'https://www.patreon.com/Lars_und_so',
        '_blank',
      );
    },
  },
};
</script>

<template>
  <div class="main">
    <img alt="Ayako as a Devil" src="https://ayakobot.com/cdn/website_assets/ayakodevil.png"/>
    <div><h1>Premium?</h1></div>
    <div>
      <h3>No one likes Pay-Walls</h3>
      <h4>we neither</h4>
      <br>
      <h3>Consider Donating</h3>
      <h4>to help Ayako stay free to access forever</h4>
      <h4>and cover her hosting costs</h4>
    </div>
    <img alt="Green Flower" class="greenFlower1"
         src="https://ayakobot.com/cdn/website_assets/greenFlower.png"/>
    <button @click="donate">Donate
    </button>
    <img alt="Green Flower" class="greenFlower2"
         src="https://ayakobot.com/cdn/website_assets/greenFlower.png"/>
  </div>
</template>

<style scoped>
.greenFlower2, .greenFlower1 {
  position: absolute;
  width: 6rem;
  margin-top: 21rem;
}

.greenFlower2 {
  margin-left: 20rem;
}

.greenFlower1 {
  margin-left: -20rem;
}

h3, h4 {
  text-align: center;
}

h3 {
  font-weight: bold;
}

button {
  margin-top: 1rem;
  padding: 1rem 1.5rem;
  background-color: #3dff56;
  border: none;
  color: #18181b;
  font-weight: bold;
  border-radius: 0.5em;
  transition: all 0.2s ease-in-out;
}

img {
  width: 8em;
  border-radius: 2em;
}

.main {
  padding-top: 5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

button:hover {
  background-color: gold;
  scale: 1.2;
}
</style>
