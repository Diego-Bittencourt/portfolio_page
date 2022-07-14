<template>
  <the-header></the-header>
</template>


<script>
import TheHeader from './components/layout/TheHeader.vue';
export default {
  components: {
    TheHeader
  },

  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  font-family: 'Roboto', sans-serif;
  
}

body {
  font-size: 1.6rem;
}
</style>