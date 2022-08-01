<template>
  <button v-if="button" :class="color">
    <slot></slot>
  </button>
  <router-link v-if="link" :to="to" :class="color">
    <slot></slot>
  </router-link>
  <a v-if="outlink" :href="receivedlink" target="_blank">
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
}

button:hover,
a:hover {
  background-color: #494848;
  color: #dddddd;
  transition: 0.5s;
  border-color: #dddddd;
}

.green:active {
  transform: scale(0.9);
  transition: 0.1s;
  color: #67b658;
  border-color: #67b658;
  
}

.red:active {
  transform: scale(0.9);
  transition: 0.1s;
  color: rgb(190, 60, 60);
  border-color: rgb(190, 60, 60);
}

.blue:active {
  transform: scale(0.9);
  transition: 0.1s;
  color: rgb(36, 36, 179);
  border-color: rgb(36, 36, 179);
}

</style>
