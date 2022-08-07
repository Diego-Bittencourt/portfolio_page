<template>
  <div class="fireball" :style="fireBallPosition"></div>
  <div class="burnwrap" :style="burnPosition">
    {{ fireBallX }}
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
      fireBallY: 10
    };
  },
  methods: {
    resetSpell() {
      this.$emit("resetSpell");
    },
    updatePosition(numbY, numbX) {
      this.positionY = numbY + 9.5;
      this.positionX = 2.5 + numbX + 10 * this.direction;
    },
    castFireBall(numbY, numbX) {
      console.log("cast fire bell")
      this.fireBallX = 3 + numbX;
      this.fireBallY = 2.5 + numbY;
      this.moveFireBall();
    },
    moveFireBall () {
      console.log("move Fire ball");
      let id = null;
      let index = 1;
      clearInterval(id);
      id = setInterval(frame, 10);
      function frame() {
        if (index === 200) {
          clearInterval(id);
        } else if (index < 100)  {
          this.fireBallY = this.fireBallY - 1;
          this.fireBallX = (this.fireBallX + 1)* this.direction;
          index++;
        }
      }
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
    fireBallPosition () {
      return "top: " + this.fireBallY + "%; left: " + this.fireBallX + "%;";
    }
  },
  watch: {
    fireSpell(val) {
      console.log("eita");
      this.updatePosition(this.posY, this.posX);
      this.castFireBall(this.posY, this.posX);
      this.resetSpell();
      return val;
    },
  },
};
</script>

<style scoped>
.fireball {
  position: absolute;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  background-color : red;
  z-index: 5;
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
  margin-top: -20px;
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
