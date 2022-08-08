<template>
  <div class="fireball" :style="fireBallPosition"></div>
  <div class="flamewrapper" :style="flamePosition">
    <div class="innerflamewrapper">
      <div class="flame redflame"></div>
      <div class="flame pinkflame"></div>
      <div class="flame orangeflame"></div>
      <div class="flame yellowflame"></div>
      <div class="flame whiteflame"></div>
    </div>
  </div>
  <div class="burnwrap" :style="burnPosition">
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
</template>

<script>
export default {
  props: ["posX", "posY", "direction", "fireSpell"],
  emits: ["resetSpell"],
  data() {
    return {
      spellCast: this.fireSpell,
      positionX: 10,
      positionY: 10,
      slimeDirection: 1,
      fireBallX: 10,
      fireBallY: 10,
      flameX:10,
      flameY:10
    };
  },
  methods: {
    resetSpell() {
      this.$emit("resetSpell");
    },
    updatePosition(numbY, numbX) {
      this.positionY = numbY + 7;
      this.positionX = 3 + numbX + 10 * this.direction;
    },
    castFireBall(numbY, numbX) {
      console.log(numbY, numbX);
      this.fireBallX = 4.8 + numbX + 10 * this.direction;
      this.fireBallY = 3.7 + numbY;
    },
    flameActivate(numbY, numbX) {
      this.flameX = 3.7 + numbX + 10 * this.direction;
      this.flameY = numbY;
    }
  },
  computed: {
    burnPosition() {
      return "top: " + this.positionY + "%; left: " + this.positionX + "%;";
      // if (this.fireSpell) {
      // // this.positionX = this.posX;
      // // this.positionY = this.posY;
      // // this.slimeDirection = this.direction;
      // return "top: " + this.posY + "%; left: " + this.posX + "%;";

      // } else {
      //   return "not yet"
      // }
    },
    fireBallPosition() {
      console.log("positao", this.fireBallY);
      return "top: " + this.fireBallY + "%; left: " + this.fireBallX + "%;";
    },
    flamePosition() {
      return "top: " + this.flameY + "%; left: " + this.flameX + "%;"
    }
  },
  watch: {
    fireSpell(val) {
      console.log("eita");
      this.updatePosition(this.posY, this.posX);
      this.castFireBall(this.posY, this.posX);
      this.flameActivate(this.posY, this.posX);
      this.resetSpell();
      return val;
    },
  },
};
</script>

<style scoped>
.flamewrapper {
  opacity: 0.7;
  height: 50px;
  width: 50px;
  position: absolute;
  border: 1px solid red;
  z-index: 5;
}

.innerflamewrapper {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  background-color: yellow;
  width: 50%;
  height: 50%;
  box-shadow: 0px 0px 6px 2px yellow;
}
.orangeflame {
  background-color: orangered;
  width: 70%;
  height: 70%;
  box-shadow: 0px 0px 8px 3px orangered;
}
.pinkflame {
  background-color: rgb(236, 99, 207);
  width: 85%;
  height: 85%;
  box-shadow: 0px 0px 10px 3px rgb(236, 99, 207);
}
.redflame {
  background-color: red;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 8px 3px red;
}

.flame {
  position: absolute;
  bottom: 0;
}

.fireball {
  position: absolute;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  background: radial-gradient(
      circle at 50% 0,
      rgba(255, 0, 0, 0.5),
      rgba(208, 255, 0, 0) 70.71%
    ),
    radial-gradient(
      circle at 6.7% 75%,
      rgba(255, 0, 255, 0.5),
      rgba(255, 0, 85, 0) 70.71%
    ),
    radial-gradient(
        circle at 93.3% 75%,
        rgba(255, 94, 0, 0.5),
        rgba(255, 0, 0, 0.568) 70.71%
      )
      beige;
  border: 1px solid black;
  z-index: 5;
  animation: roundfireball 0.5s linear infinite;
}

@keyframes roundfireball {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
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
</style>
