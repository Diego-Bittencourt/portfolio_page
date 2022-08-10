<template>
  <div class="plantwrapper" :style="seedPosition">
    <div class="plantoverlayer">
      <div class="stem"></div>
      <div class="leaf lf1"></div>
      <div class="leaf lf2"></div>
      <div class="leaf lf3"></div>
      <div class="leaf lf4"></div>
      <div class="ground"></div>
      <div class="flowerwrapper">
        <div class="flowerinnerwrapper">
        <div class="petal pt6"></div>
        <div class="petal pt5"></div>
        <div class="petal pt4"></div>
        <div class="petal pt3"></div>
        <div class="petal pt2"></div>
        <div class="petal pt1"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["posY", "posX", "direction", "plantSpell"],
  data() {
    return {
      positionY: 10,
      positionX: 10,
    };
  },
  methods: {
    updatePosition(numbY, numbX) {
      this.positionY = numbY - 2;
      this.positionX = 1 + numbX + 12*this.direction;
    },
    resetSpell() {
      this.$emit("resetSpell");
    },
  },
  computed: {
    seedPosition() {
      return "top: " + this.positionY + "%; left: " + this.positionX + "%;";
    },
  },
  watch: {
    plantSpell() {
      console.log("watcher done");
      this.updatePosition(this.posY, this.posX);
      // this.castSeed();
      this.resetSpell();
    },
  },
};
</script>

<style scoped>
.ground {
  background-color: rgb(150, 83, 28);
  position: absolute;
  bottom: -90%;
  left: 2%;
  border-radius: 50%;
  width: 100%;
  height: 100%;

}

.plantwrapper {
  position: absolute;
  width: 80px;
  height: 80px;
  z-index: 6;
  overflow: hidden;
}

.plantoverlayer {
  height: 100%;
  width: 100%;
  position: relative;
}

.stem {
  width: 8%;
  height: 70%;
  margin-top: 30%;
  background-color: green;
  position: absolute;
  left: 47%;
  top: 0;
  border: 1px solid rgb(87, 77, 47);
}

.leaf {
  border-radius: 0 50% 0 50%;
  height: 20%;
  width: 20%;
  position: absolute;
  border: 1px solid rgb(87, 77, 47);
  background-color: green;
}

.lf1 {
  top: 70%;
  left: 25%;
  transform: rotate(-15deg);
}

.lf2 {
  top: 60%;
  left: 57%;
  transform: rotate(15deg) scaleX(-1);
}

.lf3 {
  top: 40%;
  left: 25%;
  transform: rotate(-15deg);
}

.lf4 {
  top: 35%;
  left: 57%;
  transform: rotate(15deg) scaleX(-1);
}

.flowerwrapper {
  position: absolute;
  width: 40%;
  height: 40%;
  top: 0;
  left: 30%;
}

.flowerinnerwrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.petal {
  width: 70%;
  height: 30%;
  border-radius: 0 0 50% 50%;
  background-color: rgba(245, 92, 65);
  position: absolute;
  border: 1px solid #aaa;
}

.pt1 {
  bottom: 0;
  transform: rotate(15deg);
  left: 0;
}

.pt2 {
  bottom: 0;
  right: 0;
  transform: rotate(-15deg) scaleX(-1);
}

.pt3 {
  bottom: 10%;
  left: 10%;
  transform: rotate(45deg);
}

.pt4 {
  bottom: 10%;
  right: 10%;
  transform: rotate(-45deg);
}

.pt5 {
  bottom: 20%;
  left: 10%;
  transform: rotate(75deg);
}

.pt6 {
  bottom: 20%;
  right: 10%;
  transform: rotate(-75deg);
}
</style>
