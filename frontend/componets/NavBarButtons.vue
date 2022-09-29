<template>
  <div>
    <a class="button" href="https://invite.ayakobot.com" target="_blank"
      >Invite</a
    >
    <NuxtLink class="button" to="/commands">Commands</NuxtLink>
    <a class="button" href="https://support.ayakobot.com" target="_blank"
      >Support</a
    >
    <NuxtLink class="premium button" to="/premium"> 👑 Premium 👑 </NuxtLink>
    <NuxtLink class="button login" to="/login">Login</NuxtLink>
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
</style>
