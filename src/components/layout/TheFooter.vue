<template>
  <footer>
    <ul>
      <li><h2>Links:</h2></li>
      <li>
        <base-button outlink receivedlink="https://github.com/Diego-Bittencourt/">
          <font-awesome-icon icon="fa-brands fa-github" />
          <h4>GitHub</h4>
        </base-button>
      </li>
      <li>
        <base-button outlink receivedlink="https://www.linkedin.com/in/diego-bittencourt-mendes-5b3898a8/">
          <font-awesome-icon icon="fa-brands fa-linkedin" />
          <h4>LinkedIn</h4>
        </base-button>
      </li>
      <li>
        <base-button outlink>
          <font-awesome-icon icon="fa-solid fa-file-arrow-down" />
          <h4>Resume</h4>
        </base-button>
      </li>
    </ul>
  </footer>
</template>


<style scoped>
footer {
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: center;
    padding: 0 3rem;
    background-color: #494848;
    border-top: 5px solid #7e7d7d;
    color: #d6d6d6;
}

ul {
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    gap: 10px;
}

li {
    list-style: none;
    margin: auto;
}

h2 {
    text-align: center;
}

h4 {
    margin: 0 10px;
}

.bottomright {
    width: 30%;
    height: 100%;
    border: 1px solid red;
}
</style>