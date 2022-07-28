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
}

h3 {
    text-align: center;
    margin-bottom: 10px;
}

p {
    text-align: justify;
}
</style>