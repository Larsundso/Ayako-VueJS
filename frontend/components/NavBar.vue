<script lang="ts">
const avatar = ref(null);
const tag = ref(null);

export default {
  setup() {
    const cookieAvatar = useCookie("avatar");
    avatar.value = cookieAvatar.value;

    const cookieTag = useCookie("tag");
    tag.value = cookieTag.value;
  },
  data() {
    return {
      accessToken: useCookie("accessToken")?.value,
      windowWidth: 0,
      show: false,
      avatar,
      tag,
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
      this.show = !this.show;
    },
    logout() {
      const accessToken = useCookie("accessToken");
      const cookieAvatar = useCookie("avatar");
      const cookieTag = useCookie("tag");

      cookieTag.value = null;
      cookieAvatar.value = null;
      accessToken.value = null;
      avatar.value = null;
      tag.value = null;

      location.href = "/";
    },
    dashboard() {
      location.href = `https://dashboard.ayakobot.com/login?access_token=${
        useCookie("accessToken").value
      }`;
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

      <div v-if="windowWidth >= 1000" class="buttonBox hiding">
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
        <NuxtLink
          class="button login"
          to="https://ayakobot.com/login"
          v-if="!accessToken"
        >
          Login
        </NuxtLink>
        <div v-else class="profile">
          <div class="profileButton">
            <img :src="avatar" class="pfp" />
            <div class="tag">{{ tag }}</div>
          </div>
          <div class="profileButtons">
            <button class="pButton" @click="dashboard">Dashboard</button
            ><button class="pButton logout" @click="logout">Logout</button>
          </div>
        </div>
      </div>
      <img
        v-else
        src="https://cdn.ayakobot.com/website_assets/more.png"
        class="showMore"
        @click="toggleShow"
        alt="Open Buttons Menu"
      />
    </div>
    <transition name="translate" mode="out-in">
      <div class="expandableButtonBox" v-if="show">
        <NuxtLink
          class="button login"
          to="https://ayakobot.com/login"
          @click="toggleShow"
          v-if="!accessToken"
          >Login</NuxtLink
        >
        <div v-else class="profileMobile">
          <div class="profileButtonMobile">
            <img :src="avatar" class="pfp" />
            <div class="tag">{{ tag }}</div>
          </div>
          <div class="profileButtonsMobile">
            <button class="pButtonMobile" @click="dashboard">Dashboard</button
            ><button class="pButtonMobile logout" @click="logout">
              Logout
            </button>
          </div>
        </div>
        <a class="button" href="https://invite.ayakobot.com" target="_blank"
          >Invite</a
        >
        <NuxtLink class="premium button" to="/premium" @click="toggleShow">
          👑&nbsp;Premium&nbsp;👑
        </NuxtLink>
        <a class="button" href="https://support.ayakobot.com" target="_blank"
          >Support</a
        >
        <NuxtLink class="button" to="/commands" @click="toggleShow"
          >Commands</NuxtLink
        >
      </div>
    </transition>
  </div>
</template>

<style scoped>
.profileMobile {
  margin-top: 1rem;
  margin-right: 3rem;
}

.profileButtons,
.profileButtonsMobile {
  display: flex;
  margin-top: 0.5rem;
  justify-content: space-between;
}

.profileButtonsMobile {
  flex-direction: column;
  justify-content: center;
}
.pButton,
.pButtonMobile {
  background: transparent;
  padding: 0.2em;
}

.pButton:hover,
.pButtonMobile:hover {
  background-color: var(--base-color);
}

.pButtonMobile {
  font-size: 1rem;
  margin-top: 0.3rem;
}

.logout {
  color: var(--red-color);
}

.tag {
  font-size: 0.8em;
  font-weight: bold;
}
.pfp {
  width: 1em;
  height: 1em;
  border-radius: 2em;
  margin-right: 0.5rem;
}

.profile,
.profileMobile {
  background-color: var(--noBGSelect-color);
  border-radius: 1em;
  padding: 0.5em;
  display: flex;
  flex-direction: column;
}

.profileButton,
.profileButtonMobile {
  display: flex;
  align-items: center;
}

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
  z-index: 9;
  margin-left: 30%;
  box-shadow: 0 0 0.5em 0.5em var(--base-color);
}

.showMore {
  width: 1.5em;
  margin-right: 2em;
}

@media (max-width: 1000px) {
  .hiding {
    display: none;
  }

  .logoBox {
    margin-left: auto;
    margin-right: auto;
  }
}

.buttonBox {
  display: flex;
  align-items: center;
  margin-right: 1rem;
  margin-left: 2rem;
}
.logoBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ayako {
  font-size: 1.5rem;
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
  background-color: var(--base-color);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 0.5em 0.5em var(--base-color);
  width: 100%;
}

.fix {
  position: fixed;
  width: 100%;
  z-index: 10;
  overflow-x: hidden;
}

.translate-enter-active,
.translate-leave-active {
  transition: all 0.5s ease-in-out;
}

.translate-enter-from,
.translate-leave-to {
  transform: translateY(-20rem);
}
</style>
