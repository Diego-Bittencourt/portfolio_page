<template>
  <header>
    <nav>
      <h1>Diego Bittencourt Mendes</h1>
      <div class="btnwrapper">
      <div class="redselector colorbtn" @click="setColor('red')"></div>
      <div class="blueselector colorbtn" @click="setColor('blue')"></div>
      <div class="greenselector colorbtn" @click="setColor('green')"></div>
      </div>
      

      <ul>
        <base-button link to="/projects" :color="themeColor"
          ><li><h1>Projects</h1></li></base-button
        >
        <base-button link to="/contact" :color="themeColor"
          ><li><h1>Contact</h1></li></base-button
        >
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      themeColor: ''
    }
  },
  methods: {
    setColor(color) {
      this.$emit("set-color", color);
      this.themeColor = color;
    }
  }
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-content: center;
  height: 10vh;
  width: 100%;
  background-color: #494848;
  font-size: inherit;
  color: #d6d6d6;
}

header nav {
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  margin: auto;
}

header ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  gap: 0.4rem;
}

li {
  font-size: 1.2rem;
  list-style: none;
  margin: 0 0.5rem;
  margin: auto;
  padding: 0.75rem 1.5rem;
}

h1 {
  margin: auto 0;
}

.colorbtn {
  width: 20px;
  height: 20px;
  border-radius: 10px;
  transition: 0.3s;
}

.btnwrapper {
  width: 80px;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.blueselector {
  background-color: rgb(36, 36, 179);
  border: 2px solid #d6d6d6;
}

.greenselector {
  background-color: #4d9c5b;
  border: 2px solid #d6d6d6
}

.redselector {
  background-color: rgb(190, 60, 60);
  border: 2px solid #d6d6d6
}

.blueselector:hover {
  box-shadow: 0 0 5px 5px rgba(137, 43, 226, 0.61);
}

.greenselector:hover {
  box-shadow: 0 0 5px 5px rgba(0, 221, 0, 0.63);
}

.redselector:hover {
  box-shadow: 0 0 5px 5px rgba(223, 61, 61, 0.603);
}
</style>
