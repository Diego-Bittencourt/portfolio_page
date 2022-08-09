<template>
  <button v-if="button" class="simplebutton" :class="color" >
    <slot></slot>
  </button>
  <router-link v-if="link" :to="to" :class="color">
    <slot></slot>
  </router-link>
  <a v-if="outlink" :class="color" :href="receivedlink" target="_blank">
    <slot></slot>
  </a>
</template>

<script>
export default {
  inject: ['color'],
  data() {
    return {
      color: this.color
    }
  },
  props: {
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    button: {
      type: Boolean,
      required: false,
      default: false
    },
    outlink: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
    receivedlink: {
      type: String,
      required: false,
    }
  },
};
</script>

<style scoped>
.router-link-active {
  box-shadow: 0px 0px 5px 3px #cccccccc;
}

a,
button {
  text-decoration: none;
  font: inherit;
  cursor: pointer;
  text-align: center;
  color: #494848;
  background-color: #dddddd;
  border-radius: 5px;
  border: 2px solid transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.simplebutton {
  background-color: #fff;
  border-color: #444;
  box-shadow: 3px 3px 5px 0px #0e0d0d7e;
}


button:active,
a:active {
  transform: scale(0.8);
}

button:hover,
a:hover {
  color: #dddddd;
  transition: 0.5s;
  border-color: #dddddd;
}

.green:hover {
  transition: 0.1s;
  background-color: #67b658;
  border-color: #67b658;
  
}

.red:hover {
  transition: 0.1s;
  background-color: rgb(190, 60, 60);
  border-color: rgb(190, 60, 60);
}

.blue:hover {
  transition: 0.1s;
  background-color: rgb(36, 36, 179);
  border-color: rgb(36, 36, 179);
}

</style>
