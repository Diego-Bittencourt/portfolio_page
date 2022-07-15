<template>
  <header>
    <nav>
      <i class="fa-solid fa-code"></i>
      <h1>Diego Bittencourt Mendes</h1>
      
      <ul>
        <base-button to="/projects"><li><h1>Projects</h1></li></base-button>
        <base-button><li><h1>Contact</h1></li></base-button>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-content: center;
  height: 10vh;
  width: 100%;
  background-color: #3a3a3a;
  font-size: inherit;
  color: #d6d6d6;
}

header nav {
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  margin: auto;
}

header ul {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  
  gap: 0.4rem;
}

li {
  font-size: 1.2rem;
  list-style: none;
  margin: 0 0.5rem;
  margin: auto;
  padding: 0.75rem 1.5rem;
}

h1 {
  margin: auto 0;
}


</style>
