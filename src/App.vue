<template>
  <the-header @set-color="setColor"></the-header>
  <section>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
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
  background-image: linear-gradient(135deg, rgb(221, 221, 221), rgb(119, 119, 119));
}

section {
  min-height: 80vh;
  width: 95%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 5vh 2vw;
  display: flex;
  align-items: center;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-enter-active {
  transition: all 0.5s ease-out;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

</style>