<script lang="ts">
export default {
  props: {
    contributer: Object,
  },
};
</script>

<template>
  <div class="contributer">
    <div class="name">{{ contributer.username }}</div>
    <img :src="contributer.avatar" class="pfp" alt="" />
    <div class="socials" v-if="contributer.socials">
      <div v-for="(social, index) of contributer.socials" :key="index">
        <a :href="social" target="_blank" v-if="contributer.type">
          {{ contributer.type[index] }}
        </a>
      </div>
    </div>
    <div class="roles" v-if="contributer.roles">
      <div class="role" v-for="(role, index) of contributer.roles" :key="index">
        {{ role }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.role {
  background-color: var(--noBGSelect-color);
  border-radius: 0.5em;
  padding: 0.15em 0.4em;
  margin: 0.1em;
  text-align: center;
}

.roles {
  margin-top: 1em;
}

.name {
  margin: 1em;
  font-weight: bold;
  user-select: text;
}

.pfp {
  width: 8em;
  border-radius: 5rem;
}

a {
  color: var(--text-color);
  text-decoration: none;
  border-radius: 1em;
  padding: 0.5em;
  transition: all ease-in-out 0.2s;
}

a:hover {
  background-color: var(--noBGSelect-color);
}

.socials {
  margin-top: 1em;
  display: flex;
  align-items: center;
}

.contributer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
