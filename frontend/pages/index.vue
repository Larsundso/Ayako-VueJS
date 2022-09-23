<template>
  <div>
    <NavBar />
    <NuxtLink to="/">Hello</NuxtLink>
    <NuxtLink to="*"><NotFound /></NuxtLink>
    <PageFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NotFound from './NotFound.vue'
import PageFooter from '~/components/PageFooter.vue'
import NavBar from '~/components/NavBar.vue'
import '~/assets/main.css'

export default Vue.extend({
  name: 'IndexPage',
  components: { PageFooter, NavBar, NotFound },
})
</script>
