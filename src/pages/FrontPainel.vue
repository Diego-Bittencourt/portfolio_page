<template>
  <div class="frontpainelwrapper">
    <div class="frontcard frontlogo" >
      <div class="descriptiontext">
        <p>Hello,</p>
        <h1 :style="textShadow">I'm Diego</h1>
        <h1 :style="textShadow">Web Developer</h1>
        <h4>Also a bass player, karaoke singer and a Seinfeld Fan</h4>
      </div>
      <div class="graylayer"></div>
    </div>
    <div class="skillsbox frontcard">
      <h2>Skills</h2>
      <ul>
        <li :class="color">
          <h5 class="skilltext">HTML5</h5>
          <font-awesome-icon class="skillsicon" icon="fa-brands fa-html5" />
        </li>
        <li :class="color">
          <h5 class="skilltext">CSS3</h5>
          <font-awesome-icon class="skillsicon" icon="fa-brands fa-css3-alt" />
        </li>
        <li :class="color">
          <h5 class="skilltext">Javascript</h5>
          <font-awesome-icon class="skillsicon" icon="fa-brands fa-square-js" />
        </li>
        <li :class="color">
          <h5 class="skilltext">Vue.js</h5>
          <font-awesome-icon class="skillsicon" icon="fa-brands fa-vuejs" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["color"],
  data() {
    return {
      color: this.color,
      text1: "",
      text2: "Software developer/bassplayer/karaoke singer.",
      text3: "Location: Japan.",
      text4: "Problem-solving, help people, always up to learn.",
    };
  },
  computed: {
    bkgroundcolor() {
      return this.color.value + "card" + " " + "description";
    },
    textShadow() {
      if (this.color.value === "red") {
        return "text-shadow: -5px 5px 10px  #ff1c14cc;"
      } else if (this.color.value === "blue") {
        return "text-shadow: -5px 5px 10px  #534094cc;"
      } else {
        return "text-shadow: -5px 5px 10px  #4bb020cc;"
      }
    }
  },
};
</script>

<style scoped>
.frontpainelwrapper {
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  min-height: 70vh;
  width: 100%;
}

ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 5rem;
  transition: all .3s ease-in;
  cursor: default;
}

/* h1:hover {
  text-shadow: -5px 5px 10px rgba(0, 0, 0, 0.582);
} */

h2 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 3.5rem;
}

h4 {
  color: #505050;
  font-weight: 400;
  font-size: 1.6rem;
  margin-top: 2rem;
}

h5 {
  font-size: 1.5rem;
  text-align: center;
  font-size: bold;
}

.skillsbox {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 30%;
  min-width: 220px;
}

li {
  font-size: 5rem;
  display: flex;
  flex-direction: column;
  width: 100px;
  overflow: hidden;
  margin-top: -10px;
  margin-bottom: 30px;
}

li:hover .skillsicon {
  transform: translateY(-25px);
}

.skillsicon {
  transition: 1s;
}

p {
  margin-bottom: 2rem;
  font-weight: 700;
  font-size: 3rem;
}

.skilltext {
  font-size: bold;
  transform: translateY(100px);
  transition: 1s;
}

li:hover .skilltext {
  transform: translateY(50px);
}

.description {
  font-size: 2rem;
  text-align: justify;
  transition: 1s;
}

.frontlogo {
  width: 65%;
  min-width: 450px;
}

.frontcard {
  min-height: 400px;
  height: 100%;
  border-radius: 10px;
  position: relative;
  margin: 20px auto;
}

.green,
.blue,
.red {
  /* transition: 0.3s ease-in-out; */
  padding: 1rem;
}

.green .skillsicon {
  color: #2d6d39;
}

.blue .skillsicon {
  color: #534094;
}

.red .skillsicon {
  color: #ff1c14;
}

.green:hover {
  text-shadow: 0 6px 8px #2d6d39;
}

.red:hover {
  text-shadow: 0 6px 8px rgb(190, 60, 60);
}

.blue:hover {
  text-shadow: 0 6px 8px rgb(36, 36, 179);
}

.graylayer {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.8;
  /* background-image: linear-gradient(
    135deg,
    rgb(233, 231, 231),
    rgb(41, 40, 40)
  ); */
  border-radius: 10px;
  z-index: 1;
}

.descriptiontext {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
}

.redcard,
.greencard,
.bluecard {
  transition: 1s ease-in-out;
}

.greencard {
  background-color: #4bb020;
}

.redcard {
  background-color: #ff1c14;
}

.bluecard {
  background-color: #534094;
}

@media screen and (max-width: 520px) { 
  h1 {
    font-size: 3.5rem;
    
  }

  p {
    font-size: 2.5rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  .frontlogo {
    min-width: 300px;
  }
}
</style>
