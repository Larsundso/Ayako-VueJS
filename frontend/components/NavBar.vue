<script lang="ts">
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
  <div class="fix">
    <div class="NavBarBox">
      <div class="logoBox">
        <a href="/">
          <img
            alt="Ayako Logo"
            class="ayakoLogo"
            src="https://cdn.ayakobot.com/website_assets/NavBarIcon.png"
          />
        </a>
        <span class="ayako bold">Ayako</span>
        <span class="discordBot bold">Discord Bot</span>
      </div>

      <div v-if="windowWidth >= 605" class="buttonBox hiding">
        <a class="button" href="https://invite.ayakobot.com" target="_blank"
          >Invite</a
        >
        <NuxtLink class="button" to="/commands">Commands</NuxtLink>
        <a class="button" href="https://support.ayakobot.com" target="_blank"
          >Support</a
        >
        <NuxtLink class="premium button" to="/premium">
          👑 Premium 👑
        </NuxtLink>
        <NuxtLink class="button login" to="/login">Login</NuxtLink>
      </div>
      <img
        v-else
        src="https://cdn.ayakobot.com/website_assets/more.png"
        class="showMore"
        @click="toggleShow()"
        :class="{ 'background-color': show ? 'black' : 'transparent' }"
      />
    </div>
    <div v-if="show" class="expandableButtonBox">
      <NuxtLink class="button login" to="/login" @click="toggleShow()"
        >Login</NuxtLink
      >
      <NuxtLink class="premium button" to="/premium" @click="toggleShow()">
        👑 Premium 👑
      </NuxtLink>
      <a class="button" href="https://support.ayakobot.com" target="_blank"
        >Support</a
      >
      <NuxtLink class="button" to="/commands" @click="toggleShow()"
        >Commands</NuxtLink
      >
      <a class="button" href="https://invite.ayakobot.com" target="_blank"
        >Invite</a
      >
    </div>
  </div>
</template>

<style scoped>
.premium {
  color: var(--gold-color);
}

.login {
  color: var(--red-color);
  margin-right: 1em;
}

NuxtLink,
.button {
  background-color: transparent;
  margin-right: 3rem;
  transition: background-color 0.2s ease-out;
  border-radius: 1em;
  padding: 0.5em;
}

NuxtLink:hover,
.button:hover {
  background-color: var(--noBGSelect-color);
  transition: background-color 0.2s ease-out;
}
.expandableButtonBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--base-color);
  margin-top: -0.5rem;
}

.showMore {
  width: 1.5em;
  margin-right: 2em;
}

@media (max-width: 600px) {
  .hiding {
    display: none;
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

.fix {
  position: fixed;
  width: 100%;
  box-shadow: 0 0 0.5em 0.5em #181818;
  z-index: 10;
}
</style>
