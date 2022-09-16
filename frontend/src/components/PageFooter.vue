<script>
export default {
  name: 'PageFooter',
  methods: {
    support() {
      window.open(
        'https://discord.gg/euTdctganf',
        '_blank',
      );
    },
    vote() {
      window.open(
        'https://top.gg/bot/650691698409734151/vote',
        '_blank',
      );
    },
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
  <div class="footer">
    <div class="topRow">
      <div class="self">
        <div class="name">
          <span class="ayako">Ayako</span>
          <span class="discordBot">Discord Bot</span>
        </div>
        <span class="website">ayakobot.com</span>
      </div>

      <img alt="" class="AyakoLeaning"
           src="https://ayakobot.com/cdn/website_assets/AyakoLeaning.png">

      <img alt="" class="flower2"
           src="https://ayakobot.com/cdn/website_assets/flower.png"/>

      <div class="buttons">
        <div class="row1">
          <button class="baseButton" @click="$router.push('commands')">Commands</button>
          <button class="baseButton" @click="support">Support</button>
          <button class="premium baseButton" @click="$router.push('premium')">👑 Premium 👑</button>
          <button class="vote baseButton" @click="vote">Vote</button>
          <button class="donate baseButton" @click="donate">
            <img alt="" class="donateFlower"
                 src="https://ayakobot.com/cdn/website_assets/greenFlower.png"/>
            Donate
          </button>
          <button class="baseButton" @click="$router.push('art')">Artwork</button>
        </div>
        <div class="row2">
          <button class="baseButton" @click="support">Animekos</button>
          <button class="baseButton" @click="$router.push('partners')">Partners</button>
          <button class="baseButton" @click="$router.push('credits')">Creators</button>
        </div>
        <div class="row3">
          <button class="baseButton" @click="$router.push('privacy')">Privacy</button>
          <button class="baseButton" @click="$router.push('terms')">Terms</button>
          <button class="baseButton">Copyright</button>
        </div>
      </div>
    </div>
    <div class="copyrightParent">
      <span class="copyright">Copyright © 2022 Ayako</span>
    </div>
    <img alt="" class="ayakoPeek" src="https://ayakobot.com/cdn/website_assets/ayakopeeking.png">
  </div>
</template>

<style scoped>
.donateFlower {
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  margin-top: -0.3rem;
  margin-left: -1.8rem;
  animation: donateFlower infinite 5s linear;
}

@keyframes donateFlower {
  0% {
    rotate: 0deg
  }
  100% {
    rotate: 360deg
  }
}

.flower2 {
  position: absolute;
  width: 4rem;
  height: 4rem;
  margin-right: 30rem;
  rotate: 40deg;
}

.AyakoLeaning {
  position: absolute;
  max-width: 15rem;
  margin-bottom: -1.5rem;
  bottom: 0;
  left: 0;
}

.ayakoPeek {
  float: right;
  margin-right: 5rem;
  max-width: 2rem;
  margin-top: -2rem;
}

.copyrightParent {
  display: flex;
  justify-content: center;
  align-items: center;
}

.baseButton {
  text-align: left;
  border: none;
  background-color: transparent;
  color: white;
  padding: 0.3em;
  font-size: 1em;
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
  color: gold;
}

.vote {
  color: #3dff56;
}

.baseButton:hover {
  background-color: #50505b;
  transition: background-color 0.2s ease-out;
}

.row3 {
  display: flex;
  flex-direction: column;
}

.row2 {
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
  margin-right: 3rem;
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
}

.discordBot {
  font-weight: bold;
  margin-top: 0.3em;
  margin-left: 1em;
  color: #fe3521;
}

.ayako {
  font-size: 1.5em;
  font-weight: bold;
}

.footer {
  margin-top: auto;
  top: 50vh;
}

body {
  height: 100%;
}

</style>
