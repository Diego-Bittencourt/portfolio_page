<template>
  <base-card>
    <li>
      <h3>{{ title }}</h3>
      <p class="description">{{ desc }}</p>
      <div class="linkswrapper">
        <base-button outlink :receivedlink="gitlink">CODE</base-button>
        <base-button outlink :receivedlink="desclink">LIVE</base-button>
      </div>
    </li>
  </base-card>
</template>

<script>
export default {
  props: ["title", "desc", "gitlink", "desclink"],
};
</script>

<style scoped>
li {
    list-style: none;
    padding: 2rem;
    position: relative;
}

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
    background-color: rgba(146, 140, 140, 0.514);
    z-index: 2;
    top: 0;
    left: 0;
    border-radius: 10px;
}

li:hover .linkswrapper {
    height: 100%;
    transition: 1s;
}
</style>