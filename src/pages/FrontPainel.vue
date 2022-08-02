<template>
  <div class="frontpainelwrapper">
    <div class="description frontcard">
      <p>I'm a Front-end Software Developer based in Japan.</p>
      <p>
        I'm passionate about using my problem-solving skills to help people.
      </p>
    </div>
    <div class="animation frontcard">
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
};
</script>

<style scoped>
.frontpainelwrapper {
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 100%;
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
}

.frontcard {
  width: 40%;
  min-width: 250px;
}

.green,
.blue,
.red {
  transition: 0.3s ease-in-out;
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
</style>
