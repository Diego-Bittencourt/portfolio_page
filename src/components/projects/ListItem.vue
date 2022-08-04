<template>
  <base-card>
    <li>
      <h3>{{ title }}</h3>
      <p class="description">{{ desc }}</p>
      <div class="linkswrapper">
        <base-button outlink :receivedlink="gitlink">
        <h2><font-awesome-icon icon="fa-brands fa-github" /></h2></base-button>
        <base-button outlink :receivedlink="livelink">
        <h2><font-awesome-icon icon="fa-solid fa-globe" /></h2></base-button>
      </div>
    </li>
  </base-card>
</template>

<script>
export default {
  props: ["title", "desc", "gitlink", "livelink"],
};
</script>

<style scoped>
li {
    list-style: none;
    padding: 2rem;
    width: 100%;
    height: 20rem;
    position: relative;
    margin: 0;
}

/* h2 {
  padding: 1rem;
} */

h3 {
    text-align: center;
    margin-bottom: 10px;
}

p {
    text-align: justify;
}

.linkswrapper {
    position: absolute;
    width: 100%;
    height: 0%;
    background-color: rgba(90, 87, 87, 0.685);
    z-index: 2;
    top: 0;
    left: 0;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    gap: 20px;
    transition: 1s;
}


li:hover .linkswrapper {
    height: 100%;
}


</style>