<script>
export default {};
</script>

<template>
  <div class="main">
    <img alt="" src="https://cdn.ayakobot.com/website_assets/ayakodevil.png" />
    <div><h1>Premium?</h1></div>
    <div>
      <h3>No one likes Pay-Walls</h3>
      <h4>neither do we</h4>
      <br />
      <h3>Consider Donating</h3>
      <h4>to help Ayako stay free to access forever</h4>
    </div>
    <img
      alt="Green Flower"
      class="greenFlower1"
      src="https://cdn.ayakobot.com/website_assets/greenFlower.png"
    />
    <a class="button" href="https://www.patreon.com/Lars_und_so" target="_blank"
      >Donate</a
    >
    <img
      alt="Green Flower"
      class="greenFlower2"
      src="https://cdn.ayakobot.com/website_assets/greenFlower.png"
    />
  </div>
</template>

<style scoped>
@media (max-width: 500px) {
  .greenFlower1,
  .greenFlower2 {
    display: none;
  }
}

.greenFlower2,
.greenFlower1 {
  position: absolute;
  width: 6rem;
  margin-top: 25.6rem;
}

.greenFlower2 {
  margin-left: 10rem;
  animation: rotate 30s linear infinite;
}

.greenFlower1 {
  margin-left: -10rem;
  animation: rotateInvert 30s linear infinite;
}

h3,
h4 {
  text-align: center;
}

a {
  color: black;
  margin-top: 2rem;
}

img {
  width: 8em;
  border-radius: 2em;
}

@keyframes rotate {
  0% {
    rotate: 0deg;
  }
  100% {
    rotate: 360deg;
  }
}

@keyframes rotateInvert {
  0% {
    rotate: 0deg;
  }
  100% {
    rotate: -360deg;
  }
}

.main {
  padding-top: 5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10rem;
}

a:hover {
  background-color: var(--gold-color);
  scale: 1.2;
}
</style>
