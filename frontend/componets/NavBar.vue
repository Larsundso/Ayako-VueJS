<script>
import { ref } from "vue";
const show = ref(false);

export default {
  data() {
    return {
      windowWidth: 0,
      show,
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
    toggleShow() {
      show.value = !show.value;
    },
  },
};
</script>

<template>
  <div class="NavBarBox">
    <div class="logoBox">
      <a href="/">
        <img
          alt="Ayako Logo"
          class="ayakoLogo"
          src="https://cdn.ayakobot.com/website_assets//NavBarIcon.png"
        />
      </a>
      <span class="ayako bold">Ayako</span>
      <span class="discordBot bold">Discord Bot</span>
    </div>

    <div v-if="windowWidth >= 605" class="buttonBox hiding">
      <a class="button" href="https://invite.ayakobot.com" target="_blank"
        >Invite</a
      >
      <button class="button" @click="$router.push('commands')">Commands</button>
      <a class="button" href="https://support.ayakobot.com" target="_blank"
        >Support</a
      >
      <button class="premium button" @click="$router.push('premium')">
        👑 Premium 👑
      </button>
      <button class="button login" @click="$router.push('login')">Login</button>
    </div>
    <img
      v-else
      src="https://cdn.ayakobot.com/website_assets/more.png"
      class="showMore"
      @click="toggleShow()"
      :class="{ 'background-color': show ? 'black' : 'transparent' }"
    />
  </div>
  <div v-if="show" class="buttonBox">
    <a class="button" href="https://invite.ayakobot.com" target="_blank"
      >Invite</a
    >
    <button @click="$router.push('commands')">Commands</button>
    <a class="button" href="https://support.ayakobot.com" target="_blank"
      >Support</a
    >
    <button class="premium" @click="$router.push('premium')">
      👑 Premium 👑
    </button>
    <button class="login" @click="$router.push('login')">Login</button>
  </div>
</template>

<style scoped>
.showMore {
  width: 1.5em;
  margin-right: 2em;
}

@media (max-width: 600px) {
  .hiding {
    display: none;
  }

  .NavBarBox {
    display: initial;
  }

  .logoBox {
    margin-left: auto;
    margin-right: auto;
  }
}

.buttonBox {
  margin-right: 1rem;
  margin-left: 2rem;
}
.logoBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.premium {
  color: var(--gold-color);
}

.login {
  color: var(--red-color);
  margin-right: 1em;
}

button,
.button {
  background-color: transparent;
  margin-right: 3rem;
  transition: background-color 0.2s ease-out;
  border-radius: 1em;
  padding: 0.5em;
}

button:hover,
.button:hover {
  background-color: var(--noBGSelect-color);
  transition: background-color 0.2s ease-out;
}

.ayako {
  font-size: 1.5em;
}

.bold {
  font-weight: bold;
}

.ayakoLogo {
  width: 3em;
  height: 3em;
}

.discordBot {
  margin-top: 0.3em;
  margin-left: 1em;
  color: var(--red-color);
}

.NavBarBox {
  z-index: 10;
  overflow: hidden;
  background-color: #181818;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 0.5em 0.5em #181818;
  width: 100%;
}
</style>
