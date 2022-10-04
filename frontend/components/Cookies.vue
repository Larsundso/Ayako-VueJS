<script lang="ts">
import { useCookie } from "#app";

export default {
  setup() {
    const agreed = useCookie("agreedToCookies");

    return {
      agreed,
    };
  },
  methods: {
    setCookie() {
      const agreed = useCookie("agreedToCookies");
      agreed.value = "true";
      location.reload();
    },
  },
};
</script>

<template>
  <div v-if="!agreed" class="modalMask">
    <div class="modalWrapper">
      <div class="modalContainer">
        <p>
          This Website uses Cookies to work properly and save Session Details
        </p>
        <div class="buttonBox">
          <NuxtLink class="button privacy" to="/privacy"
            >Find out how we handle your Data</NuxtLink
          >
          <button @click="setCookie">
            Got it!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modalMask {
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: table;
  transition: all 0.3s ease;
}

.modalWrapper {
  display: table-cell;
  vertical-align: middle;
}

.modalContainer {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  width: 50%;
  margin: auto;
  padding: 2em;
  background-color: var(--base-color);
  border-radius: 1rem;
}

.buttonBox {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.button,
button {
  margin: auto;
}

.privacy {
  background: grey;
  font-size: 0.8rem;
}

.privacy:hover {
  background-color: rgb(87, 87, 87);
}
</style>
