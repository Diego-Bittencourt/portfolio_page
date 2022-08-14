<template>
  <transition name="dialog">
    <div
      v-if="isTalking"
      class="slimechat"
      :class="color"
      :style="dialogPosition"
    >
      <p>{{ slimePhrase }}</p>
    </div>
  </transition>
</template>

<script>
export default {
  inject: ["color"],
  props: ["posY", "posX", "direction", "isTalking", "isCoolDown"],
  data() {
    return {
      color: this.color,
      slimePhrase: "",
      coolDownPhrase: {
        red: "I need to recharge my fire.",
        green: "Let's save energy for later.",
        blue: "It's on cooldown. Keep it slow.",
      },
      idlePhrases: {
        red: [
          "Let's put everything on fire! hehehe!",
          "C'mon, what are you waiting for? Let's fire everything up!",
          "Hey, let's go for a roll",
          "Hot, e?",
        ],
        blue: [
          "Good morning, i guess? I'm so sleepy...",
          "Is it too early to take a nap?",
          "Zzzzzzzz...ice crea....yeah....ZZZZ",
          "I'm tired. Do you mind if I take a nap?",
        ],
        green: [
          "Hello! Have you ever planted a tree?",
          "What a nice weather! Let's go for a walk!",
          "My favorite color is green. What's yours?",
          "Let's plant some trees!",
        ],
      },
      spellPhrases: {
        red: [
          "I'm on fire! hehehe",
          "You got a burn.",
          "Let's put everything on fire! hehehe!",
          "Is it hot, or it's just me?",
        ],
        blue: [
          "Cold..brrrrr",
          "Nothing better than a comfy bed in a cold day.",
          "Let's get some warm tea and relax.",
          "Watch out the slippery floor!",
        ],
        green: [
          "More trees!",
          "Let's preserve the enviroment.",
          "I hope that will turn into a beautiful flower.",
          "I love passion fruit flowers.",
        ],
      },
    };
  },
  watch: {
    isTalking() {
      if (this.isCoolDown === true) {
        this.coolDownDialog();
        return;
      } else {
        this.displayActionDialog();
      }
    },
  },
  methods: {
    coolDownDialog() {
      if (this.color.value === "blue") {
        this.slimePhrase = this.coolDownPhrase.blue;
      } else if (this.color.value === "red") {
        this.slimePhrase = this.coolDownPhrase.red;
      } else {
        this.slimePhrase = this.coolDownPhrase.green;
      }
    },
    displayActionDialog() {
      if (this.color.value === "blue") {
        this.slimePhrase =
          this.spellPhrases.blue[Math.floor(Math.random() * 4)];
      } else if (this.color.value === "red") {
        this.slimePhrase = this.spellPhrases.red[Math.floor(Math.random() * 4)];
      } else {
        this.slimePhrase =
          this.spellPhrases.green[Math.floor(Math.random() * 4)];
      }
    },
  },
  computed: {
    dialogPosition() {
      if (this.direction === 1) {
        return (
          "top: " +
          (this.posY - 8) +
          "%; left: " +
          (this.posX - 7) +
          "%; transform: rotate(-20deg);"
        );
      } else {
        return (
          "top: " +
          (this.posY - 8) +
          "%; left: " +
          (this.posX + 6) +
          "%; transform: rotate(20deg);"
        );
      }
    },
  },
};
</script>

<style scoped>
.slimechat {
  padding: 5px;
  position: absolute;
  border-radius: 10px;
  border: 1px solid rgba(134, 134, 134, 0.5);
  max-width: 150px;
  /* height: 80px; */
  z-index: 6;
  transition: background-color 1s ease-in-out;
  display: flex;
  align-items: center;
}

p {
  font-size: 1.6rem;
  text-align: center;
  font-weight: bold;
  opacity: 1;
  margin: 0 auto;
}

.green {
  background-color: rgba(131, 196, 77, 0.685);
}

.red {
  background-color: rgba(196, 77, 77, 0.685);
}

.blue {
  background-color: rgba(77, 77, 196, 0.685);
}

.dialog-enter-from {
  transform: scale(0.1) rotate(90deg);
  opacity: 0;
}

.dialog-enter-to {
  transform: scale(1) rotate(-20deg);
  opacity: 1;
}

.dialog-enter-active {
  transition: 0.4s all ease-in-out;
}

.dialog-leave-from {
  transform: rotate(-20deg);
  opacity: 1;
}

.dialog-leave-to {
  opacity: 0;
}

.dialog-leave-active {
  transition: 0.4s all ease-out;
}
</style>
