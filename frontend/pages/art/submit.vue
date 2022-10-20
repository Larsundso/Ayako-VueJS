<script lang="ts" setup>
import { ref } from "vue";

const accessToken = useCookie("accessToken");
const submitted = ref(false);
const url = ref(null);
const valid = ref(false);
const error = ref(null);

const submitFile = () => {
  fetch("https://api.ayakobot.com/artworks", {
    method: "POST",
    headers: {
      authorization: accessToken.value,
      link: url.value,
    },
  });

  submitted.value = true;
};

const textChanged = () => {
  switch (true) {
    case !["jpg", "png", "gif", "jpeg"].includes(
      url.value.split(".")[url.value.split(".").length - 1]
    ): {
      error.value =
        'Link does not end with an accepted File Extension. Valid File Extensions are "jpg", "png", "gif" and "jpeg"';
      valid.value = false;
      break;
    }
    case !url.value.startsWith("https://") &&
      !url.value.startsWith("http://"): {
      error.value = 'Link does not start with "https://" or "http://"';
      valid.value = false;
      break;
    }
    default: {
      valid.value = true;
      break;
    }
  }
};
</script>

<template>
  <div class="main">
    <div v-if="!accessToken" class="login">
      Please Log in to Submit your Artwork
      <img src="https://cdn.ayakobot.com/Cross.png" />
    </div>
    <div v-else-if="!submitted" class="upload">
      <input
        type="text"
        v-model="url"
        placeholder="Input a Image URL"
        @input="textChanged"
      />
      <div v-if="url && !valid" class="error">{{ error }}</div>
      <button class="submit" @click="submitFile()" v-if="valid">Submit</button>
    </div>
    <div v-else-if="submitted" class="success">
      <h1>Thank you for your submission!</h1>
      <h3>Ayako will DM you once your submission status is updated</h3>
    </div>
  </div>
</template>

<style scoped>
.error {
  color: var(--red-color);
  margin-top: 1rem;
}

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
