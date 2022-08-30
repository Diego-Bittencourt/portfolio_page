<template>
  <transition name="icecube">
    <div v-if="isCubeActive" class="icewrapper" :style="icePosition">
      <div v-if="isIceVisible" class="outerwrapper">
        <div class="bottomwall cubewall"></div>
        <div class="topwall cubewall"></div>
        <div class="backwall cubewall"></div>
        <div class="rightwall cubewall"></div>
        <div class="leftwall cubewall"></div>
        <div class="frontwall cubewall"></div>
      </div>
    </div>
  </transition>
  <div v-if="isSnowActive" class="snowwrapper" :style="snowPosition">
    <div class="snow sn1"></div>
    <div class="snow sn2"></div>
    <div class="snow sn3"></div>
    <div class="snow sn4"></div>
    <div class="snow sn5"></div>
    <div class="snow sn6"></div>
    <div class="snow sn7"></div>
    <div class="snow sn8"></div>
    <div class="snow sn9"></div>
    <div class="snow sn10"></div>
    <div class="snow sn11"></div>
    <div class="snow sn12"></div>
    <div class="snow sn13"></div>
    <div class="snow sn14"></div>
    <div class="snow sn15"></div>
    <div class="snow sn16"></div>
    <div class="snow sn17"></div>
    <div class="snow sn18"></div>
    <div class="snow sn19"></div>
    <div class="snow sn20"></div>
  </div>
</template>

<script>
export default {
  props: [
    "posX",
    "posY",
    "direction",
    "iceSpell",
    "isFlameFrozen",
    "isPlantFrozen",
  ],
  data() {
    return {
      positionX: 10,
      positionY: 10,
      snowPosX: 10,
      snowPosY: 10,
      isSnowActive: false,
      isCubeActive: false,
      isWaterActive: false,
      snowDirection: 1,
    };
  },
  methods: {
    updatePosition(numbX, numbY) {
      this.positionX = 1.5 + numbX + 12 * this.direction;
      this.positionY = numbY + 4;
      this.snowPosX = numbX + this.direction * 8;
      this.snowPosY = numbY + 2;
      this.$emit("cubeposition", {
        element: "ice",
        iceX: this.positionX,
        iceY: this.positionY,
      });
    },
    castAnimation() {
      this.snowDirection = this.direction;
      this.isSnowActive = true;
      setTimeout(() => (this.isSnowActive = false), 2000);
      setTimeout(() => (this.isCubeActive = true), 500);
      setTimeout(() => (this.isCubeActive = false), 8000);
    },
    resetSpell() {
      this.$emit("resetSpell");
    },
  },
  computed: {
    icePosition() {
      return "top: " + this.positionY + 
      "%; left: calc(" + this.snowDirection*40 + "px + " + this.positionX + "%;";
    },
    snowPosition() {
        return "top: " + this.snowPosY + 
        "%; left: calc(" + this.snowDirection*20 + "px + " + this.snowPosX + 
        "%); transform: scale(" + this.snowDirection*(-1) + 
        ");";
      },
    isIceVisible() {
      if (this.isFlameFrozen === false && this.isPlantFrozen === false) {
        return true;
      } else {
        return false;
      }
    },
  },
  watch: {
    iceSpell(val) {
      if (val === false) {
        return;
      }
      this.updatePosition(this.posX, this.posY);
      this.castAnimation();
      this.resetSpell();
    },
  },
};
</script>

<style scoped>
.snow {
  background-color: rgba(255, 255, 255, 0.808);
  height: 5px;
  width: 5px;
  border-radius: 50%;
  position: absolute;
  animation: snowfall 2s infinite ease-in-out;
  z-index: 5;
}

@keyframes snowfall {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-200px);
  }
}

.sn1 {
  right: -10%;
  top: 2%;
}

.sn2 {
  right: -15%;
  top: 25%;
}

.sn3 {
  right: -40%;
  top: 10%;
}

.sn4 {
  right: -30%;
  top: 30%;
}

.sn5 {
  right: -40%;
  top: 75%;
}

.sn6 {
  right: -60%;
  top: 15%;
}

.sn7 {
  right: -80%;
  top: 90%;
}

.sn8 {
  right: -80%;
  top: 10%;
}

.sn9 {
  right: -60%;
  top: 50%;
}

.sn10 {
  right: -90%;
  top: 90%;
}

.sn11 {
  right: -20%;
  top: 75%;
}

.sn12 {
  right: -50%;
  top: 50%;
}

.sn13 {
  right: -30%;
  top: 70%;
}

.sn14 {
  right: -80%;
  top: 50%;
}

.sn15 {
  right: -12%;
  top: 80%;
}

.sn16 {
  right: -12%;
  top: 45%;
}

.sn17 {
  right: -70%;
  top: 30%;
}

.sn18 {
  right: -60%;
  top: 90%;
}

.sn19 {
  right: -30%;
  top: 95%;
}

.sn20 {
  right: -35%;
  top: 60%;
}

.snowwrapper {
  height: 40px;
  width: calc(100vw * 0.1);
  max-width: 100px;
  position: absolute;
  overflow: clip;
  z-index: 5;
}

.icecube-enter-from {
  opacity: 0;
  transform: scale(0.3);
}

.icecube-enter-to {
  opacity: 1;
  transform: scale(1);
}

.icecube-enter-active {
  transition: 2s all ease-in;
}

.icecube-leave-from {
  transform: scaleY(1);
}

.icecube-leave-to {
  transform: scaleY(0);
}

.icecube-leave-active {
  transition: 3s all ease-out;
}

.icewrapper {
  width: 50px;
  height: 50px;
  position: absolute;
  z-index: 5;
}

.outerwrapper {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transform: rotateX(240deg) rotateY(-5deg) rotateZ(-155deg);
}

.cubewall {
  width: 100%;
  height: 100%;
  border: 1px solid rgb(66, 66, 66);
  background-color: rgba(127, 255, 212, 0.616);
  position: absolute;
  opacity: 0.6;
  border-radius: 3px;
}

.frontwall {
  transform: rotateX(90deg);
  transform-origin: bottom;
}

.backwall {
  transform: rotateX(90deg) translateZ(48px);
  transform-origin: bottom;
}

.leftwall {
  transform: rotateY(-90deg);
  transform-origin: right;
}

.rightwall {
  transform: rotateY(90deg);
  transform-origin: left;
}

.topwall {
  transform: translateZ(-48px);
}

@media screen and (max-width: 480px) {
  .icewrapper {
    height: 30px;
    width: 30px;
  }

  .frontwall {
    transform: rotateX(90deg);
    transform-origin: bottom;
  }

  .backwall {
    transform: rotateX(90deg) translateZ(28px);
    transform-origin: bottom;
  }

  .leftwall {
    transform: rotateY(-90deg);
    transform-origin: right;
  }

  .rightwall {
    transform: rotateY(90deg);
    transform-origin: left;
  }

  .topwall {
    transform: translateZ(-28px);
  }
}
</style>
