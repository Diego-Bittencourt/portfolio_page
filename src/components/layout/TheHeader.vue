<template>
  <header>
    <nav>
      <div class="topwrapper">
        <base-button link to="/"
          ><font-awesome-icon icon="fa-solid fa-code"
        /></base-button>
        <div class="switchlink" @click="backToTop">
          <h1 class="topname">Diego Bittencourt Mendes</h1>
          <h1 class="backtop">Back to top</h1>
        </div>
      </div>
      <div class="btnwrapper">
        <div class="redselector colorbtn" @click="setColor('red')"></div>
        <div class="blueselector colorbtn" @click="setColor('blue')"></div>
        <div class="greenselector colorbtn" @click="setColor('green')"></div>
      </div>
      <ul>
        <base-button link to="/projects"
          ><li><h1>Projects</h1></li></base-button
        >
        <base-button link to="/contact"
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
      themeColor: "",
    };
  },
  methods: {
    setColor(color) {
      this.$emit("set-color", color);
      this.themeColor = color;
    },
    backToTop() {
      this.$router.push("/");
    }
  },
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
  height: 70%;
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
}

h1 {
  margin: auto 0;
}

.topwrapper {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  gap: 10px;
  overflow: hidden;
  cursor: default;
}

.topname {
  transition: 0.5s ease-in-out;
}

.topwrapper:hover .topname {
  transform: translateY(50px);
}

.topwrapper:hover .backtop {
  transform: translateY(0);
}

.backtop {
  transition: 0.5s ease-in-out;
}

.switchlink {
  position: relative;
}


.backtop {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  transform: translateY(-50px);
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
  gap: 10px;
}

.blueselector {
  background-color: rgb(36, 36, 179);
  border: 2px solid #d6d6d6;
  transition: 0.5s;
}

.greenselector {
  background-color: #4d9c5b;
  border: 2px solid #d6d6d6;
  transition: 0.5s;
}

.redselector {
  background-color: rgb(190, 60, 60);
  border: 2px solid #d6d6d6;
  transition: 0.5s;
}

.blueselector:hover {
  box-shadow: 0 0 10px 10px rgba(137, 43, 226, 0.61);
}

.greenselector:hover {
  box-shadow: 0 0 10px 10px rgba(0, 221, 0, 0.63);
}

.redselector:hover {
  box-shadow: 0 0 10px 10px rgba(223, 61, 61, 0.603);
}
</style>
