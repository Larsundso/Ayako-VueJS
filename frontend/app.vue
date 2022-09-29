<template>
  <div>
    <NavBar />
    <NuxtPage />
    <PageFooter />
  </div>
</template>

<script lang="ts" setup>
import NavBar from "@/components/NavBar.vue";
import PageFooter from "@/components/PageFooter.vue";

useHead({
  title: "Ayako",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "https://cdn.ayakobot.com/website_assets/ayako.ico",
    },
  ],
  meta: [
    {
      name: "description",
      content:
        "Ayako provides you with tons of optimized and easy to use features for your Discord experience.",
    },
    {
      name: "keywords",
      content:
        "Ayako,Discord,DiscordBot,Moderation,AutoModeration,Chat,Fun,AntiSpam,Free,Spam,Help,Auto,Giveaway,Categories,Category",
    },
    { name: "theme-color", content: "#b0ff00" },
    {
      name: "google-site-verification",
      content: "bEQNoorq512jiwfd5Jm2rJN_1t-zEoB4qRS-3JUiFAE",
    },
  ],
});
</script>
