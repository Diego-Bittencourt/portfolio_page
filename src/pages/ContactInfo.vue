<template>
<div class="outwrapper">
  <div v-if="isLoading && !msgSent" class="loadwrapper">
    <base-loading></base-loading>
  </div>
    <base-card  v-if="msgSent && !isLoading">
  <div class="msgwrapper">
      <h2>Thank you for your message!</h2>
      <hr />
  </div>
    </base-card>
  <base-card v-if="!isLoading && !msgSent">
    <form @submit.prevent="validateForm">
      <h1>Send me a message:</h1>
      <div class="formcontrol">
        <label ref="name">Your name:</label>
        <input
          type="text"
          id="name"
          v-model.trim="userName"
          @input="validateName"
        />
        <p class="errors" v-if="isNameInvalid">
          Please, insert your name or nickname.
        </p>
      </div>
      <div class="formcontrol">
        <label ref="email">Your email:</label>
        <input
          type="email"
          id="email"
          v-model="userEmail"
          @input="validateEmail"
        />
        <p class="errors" v-if="isEmailInvalid">
          Please, insert a valid email adress.
        </p>
      </div>
      <div class="formcontrol">
        <label ref="message">Your message:</label>
        <textarea
          id="message"
          rows="4"
          v-model.trim="userMessage"
          @input="validateMessage"
        ></textarea>
        <p class="errors" v-if="isMessageInvalid">Please, write me a message</p>
      </div>
      <base-button button><h4>Send Message</h4></base-button>
      <p class="errors" v-if="isFormInvalid">
        Something went wrong. Please, try again.
      </p>
    </form>
  </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      msgSent: false,
      isFormInvalid: false,
      isNameInvalid: false,
      isEmailInvalid: false,
      isMessageInvalid: false,
      userName: "",
      userEmail: "",
      userMessage: "",
    };
  },
  mounted() {
    
        this.msgSent = false;
  },
  methods: {
    validateName() {
      this.isNameInvalid = false;
    },
    validateEmail() {
      this.isEmailInvalid = false;
    },
    validateMessage() {
      this.isMessageInvalid = false;
    },
    validateForm() {
      this.isFormInvalid = false;
      if (this.userName === "") {
        this.isNameInvalid = true;
        this.isFormInvalid = true;
      }

      if (this.userEmail === "" || !this.userEmail.includes("@")) {
        this.isEmailInvalid = true;
        this.isFormInvalid = true;
      }

      if (this.userMessage === "") {
        this.isMessageInvalid = true;
        this.isFormInvalid = true;
      }

      if (this.isFormInvalid) {
        return;
      }

      const userData = {
        userName: this.userName,
        userEmail: this.userEmail,
        userMessage: this.userMessage,
      };

      this.isLoading = true;
      
      this.sendMessage(userData);
    },
    async sendMessage(data) {
      const newMessage = {
        userName: data.userName,
        userEmail: data.userEmail,
        userMessage: data.userMessage,
      };

      const response = await fetch(
        `https://diego-bittencourt-default-rtdb.asia-southeast1.firebasedatabase.app/messages.json`,
        {
          method: "POST",
          body: JSON.stringify(newMessage),
        }
      );

      const responseData = await response.json();
      if (!response.ok) {
        const error = new Error(
          responseData.message || "Failed to send request"
        );
        throw error;
      }

      this.isLoading = false;
      this.msgSent = true;
        setTimeout(() => {this.resetForm()}, 3000);
      
    },
    resetForm() {
        this.$router.push("/");
        
    }
  },
};
</script>

<style scoped>
.outwrapper {
    margin: auto;
}

.msgwrapper {
  padding: 1.5rem;
}

.loadwrapper {
  margin: auto;
}

form {
  margin: 2rem;
  padding: 1rem;
  height: 60vh;
  min-height: 340px;
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
