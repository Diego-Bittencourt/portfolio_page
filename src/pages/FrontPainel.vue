<template>
<section>
  <div class="intro">
    </div>
    <div class="description">
      <p>I'm a Front-end Software Developer based in Japan with strong UI/UX skills</p>
      <p>Skills</p>
      <ul>
        <li>HTML/CSS</li>
        <li>Javascipt</li>
        <li>Vue.js</li>
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