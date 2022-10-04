<script setup lang="ts">
const success = ref(null);

onMounted(() => {
  const queries = location.hash.split(/&/g);
  const token = queries
    .find((q) => q.startsWith("access_token"))
    ?.replace("access_token=", "");
  const expires =
    Number(
      queries
        .find((q) => q.startsWith("expires_in"))
        ?.replace("expires_in=", "")
    ) || 604800;

  if (!token) {
    success.value = false;
    return;
  }

  const accessToken = useCookie("accessToken", { maxAge: expires });
  accessToken.value = token;
  success.value = true;

  setTimeout(() => {
    location.href = "/";
  }, 1000);
});
</script>

<template>
  <div>
    <div v-if="success === true" class="main">
      <img src="https://cdn.ayakobot.com/Tick.png" class="tick" />
      <p>Success!</p>
      <p>
        <img
          src="https://cdn.ayakobot.com/Loading.gif"
          class="redirecting"
        />Redirecting...
      </p>
    </div>
    <div v-else-if="success === false" class="main">
      <img src="https://cdn.ayakobot.com/Cross.png" class="cross" />
      <p>Error</p>
    </div>
    <div v-else class="main">
      <img src="https://cdn.ayakobot.com/Loading.gif" class="loading" />
      <p>Loading</p>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  margin-bottom: 40%;
}

p {
  margin: auto;
  margin-top: 1rem;
}

.loading,
.tick,
.cross {
  margin: auto;
  width: 2em;
}

.redirecting {
  width: 1em;
  margin-right: 1em;
}
</style>
