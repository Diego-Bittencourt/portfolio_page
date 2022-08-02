<template>
    <form @submit.prevent="sendMessage">
        <h1>Send me a message:</h1>
        <label ref="name">Your name:</label>
        <input type="text" id="name" />
        <p>Please, insert your name or nickname.</p>
        <label ref="email">Your email:</label>
        <input type="email" id="email" />
        <p>Please, insert a valid email adress.</p>
        <label ref="message">Your message:</label>
        <textarea id="message" row="6"></textarea>
        <p>Please, write me a message</p>
        <base-button button>Send Message</base-button>
    </form>
</template>

<script>
export default {
    methods: {
        sendMessage () {
            //send message
        }
    }
}
</script>

<style scoped>

</style>

