// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  target: "static",
  modules: ["@vueuse/nuxt"],
  nitro: {
    preset: "nitro-prerender",
  },
  css: ["@/assets/main.css"],
});
