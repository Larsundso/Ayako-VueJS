<script lang="ts">
export default {
  data() {
    return {
      windowWidth: 0,
    };
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>

<template>
  <div class="footer">
    <img
      alt=""
      class="AyakoLeaning"
      src="https://cdn.ayakobot.com/website_assets/AyakoLeaning.png"
    />
    <img
      alt=""
      class="flower2"
      src="https://cdn.ayakobot.com/website_assets/flower.png"
    />

    <div class="topRow">
      <div class="self">
        <div class="name">
          <span class="ayako">Ayako</span>
          <span class="discordBot">Discord Bot</span>
        </div>
        <span class="website">ayakobot.com</span>
      </div>

      <div class="buttons">
        <div class="row1">
          <NuxtLink class="button" to="/commands"> Commands </NuxtLink>
          <a class="button" href="https://support.ayakobot.com" target="_blank"
            >Support</a
          >
          <NuxtLink class="premium button" to="/premium">
            👑 Premium 👑
          </NuxtLink>
          <a
            class="vote button"
            href="https://top.gg/bot/650691698409734151/vote"
            target="_blank"
            >Vote</a
          >
          <a
            class="donate button"
            href="https://www.patreon.com/Lars_und_so"
            target="_blank"
          >
            <img
              alt=""
              class="donateFlower"
              src="https://cdn.ayakobot.com/website_assets/greenFlower.png"
            />
            Donate
            <img
              v-if="windowWidth < 800"
              alt=""
              class="donateFlower2"
              src="https://cdn.ayakobot.com/website_assets/greenFlower.png"
            />
          </a>
          <NuxtLink class="button" to="/art">Artwork</NuxtLink>
        </div>
        <div class="row2">
          <a class="button" href="https://support.ayakobot.com" target="_blank"
            >Animekos</a
          >
          <NuxtLink class="button" to="/partners">Partners</NuxtLink>
          <NuxtLink class="button" to="/credits">Creators</NuxtLink>
        </div>
        <div class="row3">
          <NuxtLink class="button" to="/privacy">Privacy</NuxtLink>
          <NuxtLink class="button" to="/terms">Terms</NuxtLink>
        </div>
      </div>
    </div>
    <div class="copyrightParent">
      <span class="copyright">Copyright © 2022 Ayako</span>
    </div>
    <img
      alt=""
      class="ayakoPeek"
      src="https://cdn.ayakobot.com/website_assets/ayakopeeking.png"
    />
  </div>
</template>

<style scoped>
@media (max-width: 1500px) {
  .AyakoLeaning {
    display: none;
  }
}

@media (max-width: 800px) {
  .ayakoPeek {
    margin-top: 14rem;
  }
  .footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .self {
    margin-bottom: 2rem;
  }

  .topRow {
    flex-direction: column;
  }

  .buttons {
    flex-direction: column;
    margin-bottom: 2rem;
  }

  .flower2 {
    display: none;
  }

  .row1 {
    margin-bottom: 1rem;
  }

  .button {
    margin: auto;
  }

  .row2 {
    margin-left: 0rem;
    text-align: center;
    margin-bottom: 1rem;
    margin-right: 0rem;
  }

  .donateFlower {
    width: 1.5rem;
    height: 1.5rem;
    animation: donateFlower infinite 5s linear;
  }
  
  .donateFlower2 {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    animation: donateFlowerInvert infinite 5s linear;
    margin-top: -0.184rem;
    margin-left: 0.27rem;
  }
}

@media (min-width: 800px) {
  .row2 {
    margin-left: 4rem;
    margin-right: 4rem;
  }
}

.donateFlower {
  width: 1.5rem;
  height: 1.5rem;
  margin-top: -3rem;
  margin-bottom: -0.4rem;
  margin-left: -1.8rem;
  animation: donateFlower infinite 5s linear;
}

.donateFlower2 {
  width: 1.5rem;
  height: 1.5rem;
  animation: donateFlowerInvert infinite 5s linear;
}

@keyframes donateFlowerInvert {
  0% {
    rotate: 0deg;
  }
  100% {
    rotate: -360deg;
  }
}

@keyframes donateFlower {
  0% {
    rotate: 0deg;
  }
  100% {
    rotate: 360deg;
  }
}

.flower2 {
  position: absolute;
  width: 4rem;
  height: 4rem;
  left: 30%;
  margin-top: 5rem;
  rotate: 40deg;
}

.AyakoLeaning {
  overflow: hidden;
  position: absolute;
  max-width: 15rem;
  margin-top: -2rem;
  float: bottom;
  left: 0;
}

.ayakoPeek {
  position: absolute;
  right: 5%;
  max-width: 2rem;
}

.copyrightParent {
  display: flex;
  justify-content: center;
  align-items: center;
}

.button {
  border-radius: 0;
  text-align: left;
  background-color: transparent;
  padding: 0.3em;
  font-size: 1em;
}

.button:hover {
  background-color: var(--noBGSelect-color);
}

.donate {
  animation: colorCycle infinite 3s alternate linear;
}

@keyframes colorCycle {
  0% {
    color: #ee6055;
  }
  25% {
    color: #60d394;
  }
  50% {
    color: #aaf683;
  }
  75% {
    color: #ffd97d;
  }
  100% {
    color: #ff9b85;
  }
}

.premium {
  color: var(--gold-color);
}

.vote {
  color: var(--button-color);
}

.row3 {
  display: flex;
  flex-direction: column;
}

.row2 {
  display: flex;
  flex-direction: column;
}

.row1 {
  display: flex;
  flex-direction: column;
}

.buttons {
  display: flex;
  justify-content: space-between;
}

.name {
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.topRow {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.self {
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  z-index: 1;
}

.discordBot {
  font-weight: bold;
  margin-top: 0.3em;
  margin-left: 1em;
  color: var(--red-color);
}

.ayako {
  font-size: 1.5em;
  font-weight: bold;
}

.footer {
  margin-top: 8em;
}
</style>
