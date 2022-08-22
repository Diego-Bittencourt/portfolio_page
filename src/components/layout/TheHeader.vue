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
        <div class="slimeselector colorbtn" :style="slimeButton" @click="toggleSlime">
          <div class="eyeswrapper" v-if="!isSlimeVisible">
            <div class="left eye"></div>
            <div class="right eye"></div>
          </div>
        </div>
        <div class="redselector colorbtn" @click="setColor('red')">
          <font-awesome-icon icon="fa-solid fa-fire-flame-curved" />
        </div>
        <div class="blueselector colorbtn" @click="setColor('blue')">
          <font-awesome-icon icon="fa-solid fa-snowflake" />
        </div>
        <div class="greenselector colorbtn" @click="setColor('green')">
          <font-awesome-icon icon="fa-solid fa-leaf" />
        </div>
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
  emits:["toggleSlimeVisibility"],
  data() {
    return {
      themeColor: "",
      isSlimeVisible: false
    };
  },
  methods: {
    setColor(color) {
      this.$emit("set-color", color);
      this.themeColor = color;
    },
    backToTop() {
      this.$router.push("/");
    },
    toggleSlime() {
      this.isSlimeVisible = !this.isSlimeVisible;
      this.$emit("toggleSlimeVisibility", this.isSlimeVisible);
    }
  },
  computed: {
    slimeButton() {
      if (this.isSlimeVisible === true) {
        return "background-color: transparent;";
      } else if(this.themeColor === "blue" && this.isSlimeVisible === false) {
        return "background-color: #71c7f0aa;";
      } else if (this.themeColor === "red"  && this.isSlimeVisible === false) {
        return "background-color: #ff1c14aa;";
      } else {
        return "background-color: #39DE18aa;";
      }
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
  padding: 0 10px;
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
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #d6d6d6;
}

.btnwrapper {
  width: 160px;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
}

.blueselector {
  background-color: #534094;
  transition: 0.5s;
}

.greenselector {
  background-color: #4d9c5b;
  transition: 0.5s;
}

.redselector {
  background-color: #ff1c14;
  transition: 0.5s;
}

.blueselector:hover {
  box-shadow: 0 0 10px 10px #534094;
}

.greenselector:hover {
  box-shadow: 0 0 10px 10px #4d9c5b;
}

.redselector:hover {
  box-shadow: 0 0 10px 10px #ff1c14;
}

.slimeselector {
  position: relative;
}

.eye {
  background-color: black;
  width: 3px;
  height: 100%;
  border-radius: 30px;
  border: 1px solid black;
  transition: 1s;
}

.eyeswrapper {
  overflow: hidden;
  animation: blink 4s linear infinite;
  height: 5px;
  width: 50%;
  position: absolute;
  top: 15%;
  left: 25%;
  display: flex;
  justify-content: space-around;
}

@keyframes blink {
  0% {
    transform: scaleY(1);
  }

  25% {
    transform: scaleY(1);
  }

  30% {
    transform: scaleY(0.2);
  }

  35% {
    transform: scaleY(0.2);
  }

  40% {
    transform: scaleY(1);
  }

  100% {
    transform: scaleY(1);
  }
}
</style>
