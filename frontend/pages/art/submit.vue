<script lang="ts" setup>
import { ref } from "vue";

const accessToken = useCookie("accessToken");
const file = ref(null);
const submitted = ref(false);
const url = ref(null);

const uploadFile = (e: any) => {
  url.value = URL.createObjectURL(e.target.files[0]);
  file.value = e.target.files[0];
};

const submitFile = () => {
  const data = new FormData();
  data.append("file", file.value);

  fetch("https://api.ayakobot.com/artworks", {
    method: "POST",
    headers: {
      authorization: accessToken.value,
      "Content-Type": "text/plain",
      test: url.value,
    },
  });

  submitted.value = true;
};
</script>

<template>
  <div class="main">
    <div v-if="!accessToken" class="login">
      Please Log in to Submit your Artwork
      <img src="https://cdn.ayakobot.com/Cross.png" />
    </div>
    <div v-else-if="!submitted" class="upload">
      <img v-if="url" :src="url" />
      <input type="file" @change="uploadFile" ref="file" />
      <button class="submit" @click="submitFile()" v-if="url">Submit</button>
    </div>
    <div v-else-if="submitted" class="success">
      <h1>Thank you for your submission!</h1>
      <h3>Ayako will DM you once your submission status is updated</h3>
    </div>
  </div>
</template>

<style scoped>
.submit {
  margin-top: 1rem;
}
.upload {
  margin-top: 20rem;
  margin-bottom: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login {
  margin-top: 4rem;
  margin-bottom: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

input {
  padding: 1rem;
  background: var(--noBGSelect-color);
  width: 11.002rem;
}

input::file-selector-button {
  font-weight: bold;
  text-decoration: none;
  background-color: var(--text-color);
  border-radius: 0.7em;
  border: none;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  color: var(--red-color);
}

input::file-selector-button:hover {
  background-color: var(--red-color);
  color: var(--text-color);
}

img {
  width: 8rem;
  height: 8rem;
}

.success {
  margin-top: 10rem;
  margin-bottom: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
