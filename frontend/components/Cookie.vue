<script>
import { defineComponent } from "@vue/composition-api";

export default {
  methods: {
    acceptedCookies() {
      useCookie("acceptedCookies").value = `true`;
      location.reload();
    },
  },
};
</script>

<template>
  <div class="main" v-if="!useCookie('acceptedCookies').value">
    <div class="text">
      <img
        class="image"
        src="https://cdn.ayakobot.com/website_assets/cookies.png"
      />
      <div>
        This Website uses Cookies to save session details, usage data and other
        Information
      </div>
    </div>
    <div class="buttons">
      <button class="button consent" @click="acceptedCookies">
        Understood!
      </button>
      <NuxtLink class="button privacy" to="/privacy"
        >Find out how we handle your Data</NuxtLink
      >
    </div>
  </div>
</template>

<style scoped>
.privacy {
  background-color: var(--noBGSelect-color);
  font-size: 0.7em;
  margin-left: 3rem;
}

.privacy:hover {
  background-color: #2d2d33;
}

.main {
  z-index: 9;
  padding-top: 2rem;
  margin-top: -2rem;
  background-color: var(--base-color);
  box-shadow: 0 0 0.5em 0.5em var(--base-color);
}

.text,
.main,
.buttons {
  display: flex;
  font-weight: bold;
  align-items: center;
  justify-content: space-around;
}

.image {
  margin-right: 1rem;
  width: 2rem;
  height: 2rem;
}

.main {
  position: fixed;
  width: 100%;
}
</style>
