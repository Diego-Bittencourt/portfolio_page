<template>
  <div class="frontpainelwrapper">
    <div class="frontcard" :class="bkgroundcolor">
      <div class="descriptiontext">
      <p>I'm a Front-end Software Developer based in Japan.</p>
      <p>
        I'm passionate about using my problem-solving skills to help people.
      </p>
      <p>I have a positive attitude and I'm always up to learn something new.</p>
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
    };
  },
  computed: {
    bkgroundcolor () {
      return this.color.value + "card" + " " + "description";
     }
  }
};
</script>

<style scoped>
.frontpainelwrapper {
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 60vh;
  width: 100%;
}

ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

h2 {
  text-align: center;
  margin-bottom: 30px;
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
  width: 100%;
}

li {
  font-size: 5rem;
  display: flex;
  flex-direction: column;
  width: 100px;
  overflow: hidden;
  margin-top: -10px;
}

li:hover .skillsicon {
  transform: translateY(80px);
}

.skillsicon {
  transition: 1s;
}

p {
  margin: 2rem;
  font-weight: 700;
}

.skilltext {
  font-size: bold;
  transform: translateY(-50px);
  transition: 1s;
}


li:hover .skilltext {
  transform: translateY(30px);
}

.description {
  font-size: 2rem;
  text-align: justify;
  transition: 1s;
}

.frontcard {
  width: 40%;
  min-width: 250px;
  height: 100%;
  border-radius: 10px;
  position: relative;
}

.green,
.blue,
.red {
  /* transition: 0.3s ease-in-out; */
  padding: 1rem;
}

.green .skillsicon {
  color: #4d9c5b;
}

.blue .skillsicon {
  color: rgb(36, 36, 179);
}

.red .skillsicon {
 color: rgb(190, 60, 60);
}

.green:hover {
  text-shadow: 0 8px 10px #4d9c5b;
}

.red:hover {
  text-shadow: 0 8px 10px rgb(190, 60, 60);
}

.blue:hover {
  text-shadow: 0 8px 10px rgb(36, 36, 179);
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
  background-image: linear-gradient(135deg, rgb(233, 231, 231), rgb(41, 40, 40));
  border-radius: 10px;
  z-index: 1;
}

.descriptiontext {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.redcard,
.greencard,
.bluecard {
  transition: 1s ease-in-out;
}

.greencard {
  background-color: #65c777;
}

.redcard {
  background-color: rgb(216, 71, 71);
}

.bluecard {
  background-color:rgb(58, 58, 206);
}


</style>
