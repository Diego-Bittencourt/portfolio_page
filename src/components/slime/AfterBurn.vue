<template>
  <transition name="flame">
    <div v-if="isFlameActive" class="flamewrapper" :style="flamePosition">
      <div class="innerflamewrapper">
        <div class="flame redflame" :style="firstFlame"></div>
        <div class="flame pinkflame" :style="secondFlame"></div>
        <div class="flame orangeflame" :style="thirdFlame"></div>
        <div class="flame yellowflame" :style="fourthFlame"></div>
        <div class="flame whiteflame"></div>
        <div class="base blueflame"></div>
        <div class="base blackflam"></div>
      </div>
    </div>
  </transition>
  <transition name="burnmark">
    <div v-if="isBurnActive" class="burnwrap" :style="burnPosition">
      <div class="scratchwrapper">
        <div class="scratch scar1"></div>
        <div class="scratch scar2"></div>
        <div class="scratch scar3"></div>
        <div class="scratch scar4"></div>
        <div class="scratch scar5"></div>
        <div class="scratch scar6"></div>
        <div class="scratch scar7"></div>
        <div class="scratch scar8"></div>
        <div class="scratch scar9"></div>
        <div class="scratch scar0"></div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["posX", "posY", "direction", "fireSpell", "isFlameFrozen"],
  emits: ["resetSpell"],
  data() {
    return {
      spellCast: this.fireSpell,
      positionX: 10,
      positionY: 10,
      slimeDirection: 1,
      flameX: 10,
      flameY: 10,
      isBallActive: false,
      isFlameActive: false,
      isBurnActive: false,
    };
  },
  methods: {
    castAnimation() {
      this.isFlameActive = true;
      setTimeout(() => this.isFlameActive = false, 7000);
      setTimeout(() => this.isBurnActive = true, 3000);
      setTimeout(() => this.isBurnActive = false, 9000);
    },
    resetSpell() {
      this.$emit("resetSpell");
    },
    updatePosition(numbY, numbX) {
      this.positionY = numbY + 7;
      this.positionX = 3 + numbX + 10 * this.direction;
    },
    flameActivate(numbY, numbX) {
      this.flameX = 3.7 + numbX + 10 * this.direction;
      this.flameY = numbY;
      this.$emit('fireposition', {element: 'fire', flameX: this.flameX, flameY: this.flameY})
    },
  },
  computed: {
    firstFlame() {
      if(this.isFlameFrozen === true) {
        return "background-color: #007369; box-shadow: 0px 0px 6px 2px #007369"
      } else {
        return "background-color: red; box-shadow: 0px 0px 8px 3px red;"
      }
    },
    secondFlame() {
      if(this.isFlameFrozen === true) {
        return "background-color: #25baae; box-shadow: 0px 0px 6px 2px #25baae"
      } else {
        return "background-color: rgb(236, 99, 207); box-shadow: 0px 0px 10px 3px rgb(236, 99, 207);"
      }
    },
    thirdFlame() {
      if(this.isFlameFrozen === true) {
        return "background-color: #7bdbd3; box-shadow: 0px 0px 6px 2px #7bdbd3"
      } else {
        return "background-color: orangered; box-shadow: 0px 0px 8px 3px orangered;"
      }
    },
    fourthFlame() {
      if(this.isFlameFrozen === true) {
        return "background-color: #bef7f2; box-shadow: 0px 0px 6px 2px #bef7f2"
      } else {
        return "background-color: yellow; box-shadow: 0px 0px 6px 2px yellow;"
      }
    },
    burnPosition() {
      return "top: " + this.positionY + "%; left: " + this.positionX + "%;";
    },
    flamePosition() {
      return "top: " + this.flameY + "%; left: " + this.flameX + "%;";
    },
  },
  watch: {
    fireSpell(val) {
      if (val === false) {
        return
      }
      this.updatePosition(this.posY, this.posX);
      this.flameActivate(this.posY, this.posX);
      this.castAnimation();
      this.resetSpell();
      return val;
    },
  },
};
</script>

<style scoped>
.flame-enter-from {
  transform: scaleY(0) translateY(60px);
  opacity: 0;
}

.flame-enter-to,
.flame-leave-from {
  transform: scaleY(1) translateY(0);
  opacity: 0.7;
}

.flame-enter-active,
.flame-leave-active {
  transition: all 1s ease-in-out;
}

.flame-leave-to {
  transform: scaleY(1) translateY(0);
  opacity: 0;
}

.burnmark-enter-from,
.burnmark-leave-to {
  opacity: 0;
}

.burnmark-enter-to,
.burnmark-leave-from {
  opacity: 1;
}

.burnmark-enter-active,
.burnmark-leave-active {
  transition: all 1s ease-in-out;
}


.flamewrapper {
  opacity: 0.7;
  height: 50px;
  width: 50px;
  position: absolute;
  z-index: 7;
}

.innerflamewrapper {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: flameflick 3ms ease-in infinite;
}

@keyframes flameflick {
  0% {
    transform: rotate(1deg);
  }
  20% {
    transform: rotate(-2deg) scale(1.05);
  }
  40% {
    transform: rotate(1deg);
  }
  60% {
    transform: rotate(-2deg) scale(0.99);
  }
  80% {
    transform: rotate(2deg);
  }
  100% {
    transform: rotate(-1deg) scale(1.03);
  }
}

.flame {
  border-radius: 50% 0 50% 50%;
  position: absolute;
  transform: rotate(-45deg);
}

.whiteflame {
  background-color: white;
  width: 30%;
  height: 30%;
  box-shadow: 0px 0px 9px 2px white;
}
.yellowflame {
  width: 50%;
  height: 50%;
}
.orangeflame {
  width: 70%;
  height: 70%;
}
.pinkflame {
  width: 85%;
  height: 85%;
}
.redflame {
  width: 100%;
  height: 100%;
}

.blueflame {
  background-color: darkblue;
  width: 15%;
  height: 15%;
  box-shadow: 0px 0px 10px 7px darkblue;
}

.blackflame {
  background-color: black;
  width: 30%;
  height: 30%;
  box-shadow: 0px 0px 10px 7px black;
  margin-bottom: -30px;
}

.base {
  position: absolute;
  border-radius: 50%;
  bottom: 0;
}

.flame {
  position: absolute;
  bottom: 0;
}

.burnwrap {
  width: 5%;
  height: 2%;
  background-color: #25252598;
  position: absolute;
  z-index: 5;
  border-radius: 100%;
}

.scratchwrapper {
  position: relative;
  height: 100%;
  width: 100%;
  /* margin-top: 0px; */
}

.scratch {
  position: absolute;
  border: 1px solid #474747a2;
  width: 1px;
  z-index: 5;
  border-radius: 10px;
}

.scar1 {
  height: 250%;
  left: 50%;
  top: -60%;
  transform: rotate(60deg);
}

.scar2 {
  height: 180%;
  left: 60%;
  top: 0;
  transform: rotate(55deg);
}

.scar3 {
  height: 230%;
  left: 70%;
  top: -40%;
  transform: rotate(-75deg);
}

.scar4 {
  height: 250%;
  left: 50%;
  top: -75%;
  transform: rotate(-80deg);
}

.scar5 {
  height: 200%;
  left: 30%;
  top: -50%;
  transform: rotate(30deg);
}

.scar6 {
  height: 150%;
  left: 10%;
  top: -20%;
  transform: rotate(45deg);
}

.scar7 {
  height: 200%;
  left: 80%;
  top: -70%;
  transform: rotate(-60deg);
}

.scar8 {
  height: 180%;
  left: 75%;
  top: -70%;
  transform: rotate(120deg);
}

.scar9 {
  height: 150%;
  left: 80%;
  top: -20%;
  transform: rotate(30deg);
}

.scar0 {
  height: 200%;
  left: 20%;
  top: -50%;
  transform: rotate(-30deg);
}

@media screen and (max-width: 480px) {
  .flamewrapper {
    width: 35px;
    height: 35px;

  }
}
</style>
