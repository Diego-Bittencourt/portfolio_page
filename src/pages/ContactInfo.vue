<template>
  <base-card>
    <form @submit.prevent="sendMessage">
      <h1>Send me a message:</h1>
      <div class="formcontrol">
        <label ref="name">Your name:</label>
        <input type="text" id="name" />
        <p class="errors">Please, insert your name or nickname.</p>
      </div>
      <div class="formcontrol">
        <label ref="email">Your email:</label>
        <input type="email" id="email" />
        <p class="errors">Please, insert a valid email adress.</p>
      </div>
      <div class="formcontrol">
        <label ref="message">Your message:</label>
        <textarea id="message" rows="5"></textarea>
        <p class="errors">Please, write me a message</p>
      </div>
      <base-button button><h4>Send Message</h4></base-button>
    </form>
  </base-card>
</template>

<script>
export default {
  methods: {
    sendMessage() {
      //send message
    },
  },
};
</script>

<style scoped>
form {
    margin: 0 2rem;
    padding: 1rem;
    height: 65vh;
}

h1 {
    text-align: center;
}

.formcontrol {
    margin: 1rem 0;
}

label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

textarea {
    resize: vertical;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    border: 1px solid #ccc;
    padding: 0.15rem;
}

input:focus,
textarea:focus {
    border-color: #6e6e6e;
    background-color: #f7fff6;
    outline: none;
}

.errors {
  font-weight: bold;
  color: red;
  font-style: italic;
  font-size: 1.4rem;
}
</style>
