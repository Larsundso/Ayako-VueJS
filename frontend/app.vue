<script lang="ts" setup>
import NavBar from "@/components/NavBar.vue";
import PageFooter from "@/components/PageFooter.vue";
import Cookie from "@/components/Cookie.vue";

const accessToken = useCookie("accessToken");
if (accessToken) {
  const userData = await fetch("https://discord.com/api/users/@me", {
    headers: {
      authorization: `Bearer ${accessToken.value}`,
    },
  }).then((r) => r.json());

  const tag = useCookie("tag");
  const avatar = useCookie("avatar");
  const id = useCookie("id");

  tag.value = `${userData.username}#${userData.discriminator}`;
  avatar.value = `https://cdn.discordapp.com/avatars/${userData.id}/${
    userData.avatar
  }${userData.avatar?.startsWith("a_") ? ".gif" : ".png"}`;
  id.value = userData.value;
}

useHead({
  title: "Ayako",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  link: [
    {
      rel: "canonical",
      href: "https://ayakobot.com/",
    },
    {
      rel: "icon",
      type: "image/x-icon",
      href: "https://cdn.ayakobot.com/website_assets/ayako.ico",
    },
  ],

  meta: [
    {
      name: "twitter:image",
      content: "https://cdn.ayakobot.com/website_assets/Icon.png",
    },
    {
      name: "og:image",
      content: "https://cdn.ayakobot.com/website_assets/Icon.png",
    },
    {
      name: "og:image:secure_url",
      content: "https://cdn.ayakobot.com/website_assets/Icon.png",
    },
    {
      name: "og:image:width",
      content: "982",
    },
    {
      name: "og:image:height",
      content: "1016",
    },
    {
      name: "og:image:type",
      content: "image/png",
    },
    {
      name: "og:type",
      content: "website",
    },
    {
      name: "og:url",
      content: "https://ayakobot.com/",
    },
    {
      name: "og:site_name",
      content: "AyakoBot.com",
    },
    {
      name: "twitter:title",
      content: "Ayako - Discord Bot",
    },
    {
      name: "og:title",
      content: "Ayako - Discord Bot",
    },
    {
      name: "description",
      content:
        "Ayako provides you with tons of optimized and easy to use features for your Discord experience.",
    },
    {
      name: "twitter:description",
      content:
        "Ayako provides you with tons of optimized and easy to use features for your Discord experience.",
    },
    {
      name: "og:description",
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

onMounted(() => {
  (function (h, o, t, j, a, r) {
    // @ts-ignore
    h.hj =
      // @ts-ignore
      h.hj ||
      function () {
        // @ts-ignore
        (h.hj.q = h.hj.q || []).push(arguments);
      };
    // @ts-ignore
    h._hjSettings = { hjid: 2589609, hjsv: 6 };
    a = o.getElementsByTagName("head")[0];
    r = o.createElement("script");
    r.async = 1;
    // @ts-ignore
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
});

onBeforeMount(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <div>
    <NavBar />
    <Cookie />
    <NuxtPage />
    <PageFooter />
  </div>
</template>
