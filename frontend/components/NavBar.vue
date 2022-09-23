<script>
export default {
  methods: {
    invite() {
      process.BROWSER_BUILD.open('', '_blank')
    },
    support() {
      process.BROWSER_BUILD.open('', '_blank')
    },
  },
}
</script>

<template>
  <div class="NavBarBox">
    <div class="logoBox">
      <img
        alt="Ayako Logo"
        class="ayakoLogo"
        onclick="process.BROWSER_BUILD.location='/'"
        src="https://cdn.ayakobot.com/website_assets/NavBarIcon.png"
      />
      <span class="ayako bold">Ayako</span>
      <span class="discordBot bold">Discord Bot</span>
    </div>

    <div class="buttonBox">
      <a
        href="https://discord.com/api/oauth2/authorize?client_id=650691698409734151&permissions=1642787630327&scope=bot%20applications.commands"
        target="_blank"
        >Invite</a
      >
      <NuxtLink to="/commands">Commands</NuxtLink>
      <a href="https://discord.com/invite/euTdctganf" target="_blank"
        >Support</a
      >
      <NuxtLink class="premium" to="/premium"> 👑 Premium 👑 </NuxtLink>
      <NuxtLink class="login" to="/login">Login</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.logoBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.premium {
  color: gold;
}

.login {
  color: #fe3521;
  margin-right: 1em;
}

NuxtLink,
a {
  background-color: transparent;
  border: none;
  color: white;
  font-weight: bold;
  margin-left: 2rem;
  transition: background-color 0.2s ease-out;
  border-radius: 1em;
  text-decoration: none;
  padding-left: 0.5em;
  padding-right: 0.5em;
}

NuxtLink:hover,
a:hover {
  background-color: #50505b;
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
  color: #fe3521;
}

.NavBarBox {
  z-index: 10;
  overflow: hidden;
  background-color: #181818;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 0.5em 0.5em #181818;
}
</style>
