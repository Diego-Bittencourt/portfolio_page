<template>
  <the-header @set-color="setColor"></the-header>
  <section>
    <router-view></router-view>
  </section>
  <the-footer></the-footer>
</template>

<!-- // npm i --save @fortawesome/fontawesome-svg-core -->
<!-- npm i --save @fortawesome/free-solid-svg-icons -->
<!-- npm i --save @fortawesome/vue-fontawesome -->
<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';
import { computed } from 'vue';

export default {
  components: {
    TheHeader,
    TheFooter
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
      if (color) {
      this.themeColor = color;
      } else {
        this.themeColor = "green";
      }
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

section {
  min-height: 80vh;
  width: 95%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 5vh 5vw;
  display: flex;
  align-items: center;
}

</style>