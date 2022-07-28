<template>
<the-header @set-color="setColor"></the-header>
<div class="pagewrapper"></div>
  
 
  
  
  <router-view :color="themeColor"></router-view>
</template>

<!-- // npm i --save @fortawesome/fontawesome-svg-core -->
<!-- npm i --save @fortawesome/free-solid-svg-icons -->
<!-- npm i --save @fortawesome/vue-fontawesome -->
<script>
import TheHeader from './components/layout/TheHeader.vue';
import { computed } from 'vue';

export default {
  components: {
    TheHeader
  },
  data () {
    return {
      themeColor: "green"
    }
  },
  provide () {
    return {
      color: computed(() => this.themeColor)
    }
  },
  methods: {
    setColor(color) {
      this.themeColor = color;
    }
  }

  
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