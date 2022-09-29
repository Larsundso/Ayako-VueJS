// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  target: "static",
  nitro: {
    preset: "nitro-prerender",
  },
  title: "Ayako",
  css: ["@/assets/main.css"],
  head: {
    noscript: [{ children: "Javascript is required" }],
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { charset: "utf-8" },
      {
        hid: "title",
        name: "title",
        content:
          "Ayako",
      },
      {
        hid: "description",
        name: "description",
        content:
          "Ayako provides you with tons of optimized and easy to use features for your Discord experience",
      },
      {
        hid: "theme-color",
        name: "theme-color",
        content: "#b0ff00",
      },
      {
        hid: "google-site-verification",
        name: "google-site-verification",
        content: "bEQNoorq512jiwfd5Jm2rJN_1t-zEoB4qRS-3JUiFAE",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "https://cdn.ayakobot.com/website_assets/ayako.ico" }],
  },
});
