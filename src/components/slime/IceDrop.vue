<template>
<transition name="icecube">
  <div v-if="isCubeActive" class="icewrapper" :style="icePosition">
    <div class="outerwrapper">
      <div class="bottomwall cubewall"></div>
      <div class="topwall cubewall"></div>
      <div class="backwall cubewall"></div>
      <div class="rightwall cubewall"></div>
      <div class="leftwall cubewall"></div>
      <div class="frontwall cubewall"></div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  props: ["posX", "posY", "direction", "iceSpell"],
  data() {
    return {
      positionX: 10,
      positionY: 10,
      isShardActive: false,
      isCubeActive: false,
      isWaterActive: false,
    };
  },
  methods: {
    updatePosition(numbX, numbY) {
      this.positionX = 1.5 + numbX + 10 * this.direction;
      this.positionY = numbY + 4;
    },
    castAnimation() {
      this.isCubeActive = true;
      setTimeout(() => this.isCubeActive = false, 5000);
    },
    resetSpell() {
      this.$emit("resetSpell");
    },
  },
  computed: {
    icePosition() {
      return "top: " + this.positionY + "%; left: " + this.positionX + "%;";
    },
  },
  watch: {
    iceSpell() {
      this.updatePosition(this.posX, this.posY);
      this.castAnimation();
      this.resetSpell();
    },
  },
};
</script>

<style scoped>
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
  transform: rotateX(240deg)  rotateY(-5deg) rotateZ(-155deg);
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


</style>
