<template>
  <section>
      <div class="description frontcard">
        <p>
          I'm a Front-end Software Developer based in Japan.
        </p>
        <p>I'm passionate about using my problem-solving skills to help people.</p>
        
      </div>
      <div class="animation frontcard">
        <p>Skills</p>
        <ul>
          <li :class="color"><font-awesome-icon icon="fa-brands fa-html5" /></li>
          <li :class="color"><font-awesome-icon icon="fa-brands fa-css3-alt" /></li>
          <li :class="color"><font-awesome-icon icon="fa-brands fa-square-js" /></li>
          <li :class="color"><font-awesome-icon icon="fa-brands fa-vuejs" /></li>
        </ul>
      </div>
  </section>
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
section {
  width: 90%;
  max-width: 1000px;
  height: 90vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}

ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

li {
  font-size: 5rem;
}

p {
  margin: 2rem;
}

.description {
  font-size: 2rem;
  padding: 3rem;
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

.green:hover {
  color:  #4d9c5b;
}

.red:hover {
  color:  rgb(190, 60, 60);
}

.blue:hover {
  color: rgb(36, 36, 179);
}
</style>
