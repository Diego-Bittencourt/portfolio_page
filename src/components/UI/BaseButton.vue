<template>
  <button v-if="!link" :class="color">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="color">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: false,
      default: null,
    },
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
}

button:hover,
a:hover {
  background-color: #494848;
  color: #dddddd;
  transition: 0.5s;
  border-color: #dddddd;
}

.green:active {
  transform: scale(0.8);
  transition: 0.2s;
  color: #67b658;
  border-color: #67b658;
  
}

.red:active {
  transform: scale(0.8);
  transition: 0.2s;
  color: rgb(190, 60, 60);
  border-color: rgb(190, 60, 60);
}

.blue:active {
  transform: scale(0.8);
  transition: 0.2s;
  color: rgb(36, 36, 179);
  border-color: rgb(36, 36, 179);
}

</style>
