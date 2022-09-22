<template>
  <div>
    <NavBar />
    <NuxtLink to="/"><HomePage /></NuxtLink>
    <PageFooter />
  </div>
</template>

<script>
import NavBar from '../components/NavBar';
import PageFooter from '../components/PageFooter';
import HomePage from './HomePage';
import '../assets/main.css';

export default {
  name: 'IndexPage',
  components: {
    NavBar,
    HomePage,
    PageFooter
  }
}
</script>
