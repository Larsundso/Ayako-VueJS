<script lang="ts">
import { ref } from "vue";
import NavBarButtons from "@/components/NavBarButtons.vue";
const show = ref(false);

export default {
  components: { NavBarButtons },
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
          src="https://cdn.ayakobot.com/website_assets/NavBarIcon.png"
        />
      </a>
      <span class="ayako bold">Ayako</span>
      <span class="discordBot bold">Discord Bot</span>
    </div>

    <div v-if="windowWidth >= 605" class="buttonBox hiding">
      <NavBarButtons />
    </div>
    <img
      v-else
      src="https://cdn.ayakobot.com/website_assets/more.png"
      class="showMore"
      @click="toggleShow()"
      :class="{ 'background-color': show ? 'black' : 'transparent' }"
    />
    <div v-if="show" class="buttonBox">
      <NavBarButtons />
    </div>
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
