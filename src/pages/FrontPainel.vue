<template>
<section>
  <div class="intro">
    </div>
    <div class="description">
      <p>I'm a Front-end Software Developer based in Japan with strong UI/UX skills</p>
      <p>Skills</p>
      <ul>
        <li><font-awesome-icon icon="fa-brands fa-html5" /></li>
        <li><font-awesome-icon icon="fa-brands fa-css3-alt" /></li>
        <li><font-awesome-icon icon="fa-brands fa-square-js" /></li>
        <li><font-awesome-icon icon="fa-brands fa-vuejs" /></li>
        </ul>
    </div>
    
</section>
    <base-card :color="color">Teste de card vermelho</base-card>
      <base-card :color="color">Teste de card azul</base-card>
      <base-card :color="color">Teste de card green</base-card>
</template>

<script>
export default {
  props: ['color']
}
</script>

<style scoped>
section {
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;

}

ul {
list-style: none;
}
</style>