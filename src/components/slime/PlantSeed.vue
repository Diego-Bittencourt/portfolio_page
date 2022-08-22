<template>
burn: {{this.plantBurn}}
<br>
frozen: {{this.isPlantFrozen}}
<br>
stem color: {{ stemLeafColor}}
  <div class="plantwrapper" :style="seedPosition">
    <div class="plantoverlayer">
      <transition name="seed">
        <div v-if="isSeedActive" class="seed"></div>
      </transition>
      <transition name="greenplant">
        <div v-if="isPlantActive" class="greenPart">
          <div class="stem" :style="stemLeafColor"></div>
          <div class="leaf lf1" :style="stemLeafColor"></div>
          <div class="leaf lf2" :style="stemLeafColor"></div>
          <div class="leaf lf3" :style="stemLeafColor"></div>
          <div class="leaf lf4" :style="stemLeafColor"></div>
        </div>
      </transition>
      <transition name="ground">
      <div class="ground" v-if="isGroundActive"></div>
      </transition>
      <transition name="flower">
        <div v-if="isFlowerActive" class="flowerwrapper">
          <div class="flowerinnerwrapper">
            <div class="petal pt6"></div>
            <div class="petal pt5"></div>
            <div class="petal pt4"></div>
            <div class="petal pt3"></div>
            <div class="petal pt2"></div>
            <div class="petal pt1"></div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: ["posY", "posX", "direction", "plantSpell", "plantBurn", "isPlantFrozen"],
  data() {
    return {
      positionY: 10,
      positionX: 10,
      isSeedActive: false,
      isPlantActive: false,
      isFlowerActive: false,
      isGroundActive: false,
      plantColor: '#7FF984'
    };
  },
  methods: {
    updatePosition(numbY, numbX) {
      this.positionY = numbY - 2;
      this.positionX = 1 + numbX + 12 * this.direction;
      this.$emit('plantposition', {element: 'plant', plantX: this.positionX, plantY: this.positionY})
    },
    resetSpell() {
      this.$emit("resetSpell");
    },
    castAnimation() {
      if (this.plantBurn === true) {
        this.plantColor = "#4F504F";
      } else if (this.isPlantFrozen === true) {
        this.plantColor = "#B0FFF7"; 
      } else {
        this.plantColor = '#7FF984';
      }

      this.isGroundActive = true;
      this.isSeedActive = true;
      setTimeout(() => (this.isSeedActive = false), 2000);
      setTimeout(() => (this.isPlantActive = true), 3000);
      setTimeout(() => (this.isPlantActive = false), 9000);
      setTimeout(() => (this.isFlowerActive = true), 4000);
      setTimeout(() => (this.isFlowerActive = false), 9000);
      setTimeout(() => (this.isGroundActive = false), 9000);
      setTimeout(() => (this.plantColor = '#7FF984'), 9000);
    },
  },
  computed: {
    seedPosition() {
      return "top: " + this.positionY + "%; left: " + this.positionX + "%;";
    },
    stemLeafColor() {
      // return "background-color: " + this.plantColor + ";";
      if (this.plantBurn === true) {
        return "background-color: #4F504F;"
      } else if (this.isPlantFrozen === true) {
        return "background-color: #B0FFF7;"
      }
      else {
        return "background-color: #7FF984;"
      }
    }
  },
  watch: {
    plantSpell(val) {
      if (val === false) {
        return
      }
      this.updatePosition(this.posY, this.posX);
      this.castAnimation();
      this.resetSpell();
    },
  },
};
</script>

<style scoped>
.seed-enter-from {
  transform: translateY(-50px);
  opacity: 0;
}

.seed-enter-to,
.seed-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.seed-enter-active,
.seed-leave-active {
  transition: 1s all ease-in;
}

.seed-leave-to {
  opacity: 0;
}

.greenplant-enter-from,
.greenplant-leave-to {
  /* transform: scale(0.1); */
  opacity: 0;
}

.greenplant-enter-to,
.greenplant-leave-from {
  /* transform: scale(1); */
  opacity: 1;
}

.greenplant-enter-active,
.greenplant-leave-active {
  transition: 2s all ease-in-out;
}

.flower-enter-from,
.flower-leave-to {
  opacity: 0;
}

.flower-enter-to,
.flower-leave-from {
  opacity: 1;
}

.flower-enter-active,
.flower-leave-active {
  transition: 2s all ease-in-out;
}

.ground-leave-to {
  opacity: 0;
}

.ground-leave-active {
  transition: 2.5s all ease-in-out;
}

.seed {
  height: 20%;
  width: 20%;
  border-radius: 50% 0 50% 0;
  background-image: radial-gradient(rgb(158, 126, 66), rgb(119, 84, 38));
  border: 1px solid black;
  position: absolute;
  left: 40%;
  bottom: 0;
}

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
  /* background-color: green; */
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
  /* background-color: green; */
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
