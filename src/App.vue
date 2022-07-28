<template>
<the-header></the-header>
<div class="pagewrapper"></div>
  
 
  <div class="red" @click="setColor('red')">Vermelho</div>
  <div class="blue" @click="setColor('blue')">Azul</div>
  <div class="green" @click="setColor('green')">Verde</div>
  <base-card :color="themeColor">Teste de card vermelho</base-card>
  <base-card :color="themeColor">Teste de card azul</base-card>
  <base-card :color="themeColor">Teste de card green</base-card>
  
  <router-view></router-view>
</template>

<!-- // npm i --save @fortawesome/fontawesome-svg-core -->
<!-- npm i --save @fortawesome/free-solid-svg-icons -->
<!-- npm i --save @fortawesome/vue-fontawesome -->
<script>
import TheHeader from './components/layout/TheHeader.vue';
export default {
  components: {
    TheHeader
  },
  data() {
    return {
      themeColor: "green"
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

.red,
.blue,
.green {
  height: 30px;
  width: 30px;
}
</style>