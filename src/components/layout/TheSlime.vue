<template>
<div class="slimecntr" v-if="this.slimevisibility">
  <div class="cntrbtn btnup" :class="color" @click="handleKeyPress({code: 119})"><font-awesome-icon icon="fa-solid fa-circle-arrow-up" /></div>
  <div class="cntrbtn btndown" :class="color" @click="handleKeyPress({code: 115})"><font-awesome-icon icon="fa-solid fa-circle-arrow-down" /></div>
  <div class="cntrbtn btnleft" :class="color" @click="handleKeyPress({code: 97})"><font-awesome-icon icon="fa-solid fa-circle-arrow-left" /></div>
  <div class="cntrbtn btnright" :class="color" @click="handleKeyPress({code: 100})"><font-awesome-icon icon="fa-solid fa-circle-arrow-right" /></div>

</div>
<slime-dialog 
    :isCoolDown="isCoolDown"
    :posX="positionX"
    :posY="positionY"
    :direction="slimeDirection"
    :isTalking="isTalking"></slime-dialog>
  <after-burn
    :isFlameFrozen="isFlameFrozen"
    :posX="positionX"
    :posY="positionY"
    :direction="slimeDirection"
    :fireSpell="fireSpell"
    @resetSpell="resetSpell('fire')"
    @fireposition="handleReaction"
  ></after-burn>
  <plant-seed
  :isPlantFrozen="isPlantFrozen"
  :plantBurn="isPlantBurn"
  :posX="positionX"
  :posY="positionY"
  :direction="slimeDirection"
  :plantSpell="plantSpell"
  @resetSpell="resetSpell('plant')"
  @plantposition="handleReaction"
  ></plant-seed>
  <ice-drop
  :isFlameFrozen="isFlameFrozen"
  :isPlantFrozen="isPlantFrozen"
  :posX="positionX"
  :posY="positionY"
  :direction="slimeDirection"
  :iceSpell="iceSpell"
  @resetSpell="resetSpell('ice')"
  @cubeposition="handleReaction"
  ></ice-drop>
  <Transition name="slimetransition">
  <div class="slimewrapper" :style="moveSlime" @click="castSpell" v-if="this.slimevisibility">
    <div class="slimeoutlayer" :style="slimeFloat">
      <div class="slimesublayer">
        <div class="slimeinnerlayer" :class="color">
          <div class="eyeswrapper">
            <div class="left eye" :class="lefteyeshape"></div>
            <div class="right eye" :class="righteyeshape"></div>
          </div>
          <div class="slimefoot"></div>
          <div class="whitedot dot1"></div>
          <div class="whitedot dot2"></div>
        </div>
      </div>
    </div>
  </div>
  </Transition>
</template>

<script>
import AfterBurn from "../slime/AfterBurn.vue";
import SlimeDialog from "../slime/SlimeDialog.vue";
import PlantSeed from "../slime/PlantSeed.vue";
import IceDrop from "../slime/IceDrop.vue";

export default {
  components: {
    AfterBurn,
    SlimeDialog,
    PlantSeed,
    IceDrop
  },
  props: ["slimevisibility"],
  inject: ["color"],
  data() {
    return {
      // slimeColor: "green",
      color: this.color,
      positionX: 45,
      positionY: 45,
      slimeDirection: 1,
      floatTime: "4",
      fireSpell: false,
      plantSpell: false,
      iceSpell: false,
      isTalking: false,
      isCoolDown: false,
      reactionHandler: {
        flameX: null,
        flameY: null,
        iceX: null,
        iceY: null,
        plantX: null,
        plantY: null
      }
    };
  },
  mounted() {
    //adding a Vanilla JS event listener to the window.
    document.addEventListener("keypress", this.handleKeyPress);
    document.addEventListener("keydown", this.fastFloatTime);
    document.addEventListener("keyup", this.slowFloatTime);
  },
  methods: {
    handleReaction(payload) {
      if (payload.element === 'fire') {
        console.log("fire", payload)
      this.reactionHandler.flameX = payload.flameX;
      this.reactionHandler.flameY = payload.flameY;
      setTimeout(() => {this.reactionHandler.flameX = null; this.reactionHandler.flameY = null}, 10000)
      } else if (payload.element === 'ice') {
        console.log('ice', payload)
        this.reactionHandler.iceX = payload.iceX;
        this.reactionHandler.iceY = payload.iceY;
        setTimeout(() => {this.reactionHandler.iceX = null; this.reactionHandler.iceY = null}, 10000)
      } else if (payload.element === 'plant') {
        console.log('plant', payload)
        this.reactionHandler.plantX = payload.plantX;
        this.reactionHandler.plantY = payload.plantY;
        setTimeout(() => {this.reactionHandler.plantX = null; this.reactionHandler.plantY = null}, 10000)
      }
    }, 
    coolDownDialog() {
      this.isTalking = false;
      this.isTalking = true;
      this.isCoolDown = false;
      this.isCoolDown = true;
      
      // setTimeout(() => this.isTalking = false, 3000);
      setTimeout(() => this.isTalking = false, 1000);
    },
    resetSpell(el) {
      if(el === 'fire') {
        setTimeout(() => this.fireSpell = false, 10000);
      } else if (el === 'ice') {
        setTimeout(() => this.iceSpell = false, 10000);
      } else if (el === 'plant') {
        setTimeout(() => this.plantSpell = false, 10000);
      }
    },
    fastFloatTime(e) {
      const keyCode = String(e.keyCode || e.code || e.keyIdentifier);
      if (
        keyCode === "87" ||
        keyCode === "68" ||
        keyCode === "83" ||
        keyCode === "65"
      ) {
        this.floatTime = "0.3";
      }
    },
    slowFloatTime(e) {
      const keyCode = String(e.keyCode || e.code || e.keyIdentifier);
      if (
        keyCode === "87" ||
        keyCode === "68" ||
        keyCode === "83" ||
        keyCode === "65"
      ) {
        this.floatTime = "4";
      }
    },
    handleKeyPress(e) {
      if (!this.slimevisibility) {
        return
      }
      const keyCode = String(e.keyCode || e.code || e.keyIdentifier);
      if (keyCode === "119" && this.positionY > 0) {
        this.positionY = this.positionY - 0.5;
      } else if (keyCode === "97" && this.positionX > 0) {
        this.positionX = this.positionX - 0.3;
        this.slimeDirection = -1;
      } else if (keyCode === "115" && this.positionY < 89.5) {
        this.positionY = this.positionY + 0.5;
      } else if (keyCode === "100" && this.positionX < 90) {
        this.positionX = this.positionX + 0.3;
        this.slimeDirection = 1;
      } else if (keyCode === "32") {
        this.castSpell();
      }
    },
    castSpell() {
      if (this.isCoolDown === true) {
        this.isTalking = false;
        this.isTalking = true;
      }
        setTimeout(() => this.isTalking = true, 1500);
        setTimeout(() => this.isCoolDown = true, 2000);
        setTimeout(() => this.isTalking = false, 3000);
        setTimeout(() => this.isCoolDown = false, 10000);
      
      
      if(this.color.value === "red") {
      this.fireSpell = true;
      } else if (this.color.value === "blue") {
        this.iceSpell = true;
      } else {
        this.plantSpell = true;
      }
    },
  },
  computed: {
    isFlameFrozen() {
      if (this.reactionHandler.flameX != null && this.reactionHandler.iceX != null &&
          Math.abs(this.reactionHandler.flameX - this.reactionHandler.iceX) < 5 &&
          Math.abs(this.reactionHandler.flameY - this.reactionHandler.iceY) < 10) {
            return true;
          } else {
            return false;
          }
    },
    isPlantBurn() {
      if (this.reactionHandler.flameX != null && this.reactionHandler.plantX != null &&
          Math.abs(this.reactionHandler.flameX - this.reactionHandler.plantX) < 5 &&
          Math.abs(this.reactionHandler.flameY - this.reactionHandler.plantY) < 5) {
            return true;
          } else {
            return false;
          }
    },
    isPlantFrozen() {
      if (this.reactionHandler.iceX != null && this.reactionHandler.plantX != null &&
          Math.abs(this.reactionHandler.iceX - this.reactionHandler.plantX) < 5 &&
          Math.abs(this.reactionHandler.iceY - this.reactionHandler.plantY) < 10) {
            return true;
          } else {
            return false;
          }
    },
    lefteyeshape() {
      if (this.color.value === "red") {
        return "leftredeyes";
      } else if (this.color.value === "blue") {
        return "leftblueeyes";
      } else {
        return "leftgreeneyes";
      }
    },
    righteyeshape() {
      if (this.color.value === "red") {
        return "rightredeyes";
      } else if (this.color.value === "blue") {
        return "rightblueeyes";
      } else {
        return "rightgreeneyes";
      }
    },
    moveSlime() {
      return (
        "left: " +
        this.positionX +
        "%; top: " +
        this.positionY +
        "%; transform: scaleX(" +
        this.slimeDirection +
        ");"
      );
    },
    slimeFloat() {
      return "animation-duration: " + this.floatTime + "s;";
    },
  },
};
</script>

<style scoped>
.slimecntr {
  float: left;
  position: sticky;
  top: 80vh;
  left: 20px;
  border-radius: 50%;
  background-color: rgb(58, 58, 58);
  width: 70px;
  height: 70px;
  padding: 10px 0;
  z-index: 10;
}

.cntrbtn {
  position: absolute;
  color: #ddd;
  transition: 1s;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  padding-left: 2px;
  padding-top: 1px;
}



.btnup {
  top: 2px;
  left: 40%;
}

.btndown {
  bottom: 2px;
  left: 40%;
}

.btnleft {
  top: 35%;
  left: 2px;
}

.btnright {
  top: 35%;
  right: 2px;
}

.slimetransition-enter-from,
.slimetransition-leave-to {
  /* top: 0%;
  left: 45%; */
  /* opacity: 0;
  transform: translateY(-30px); */
  transform: scale(0.1);
}

.slimetransition-enter-to,
.slimetransition-leave-from {
  /* top: 45%;
  left: 45%; */
  /* opacity: 1;
  transform: translateY(0); */
  transform: scale(1);
}

.slimetransition-enter-active,
.slimetransition-leave-active {
  transition: all 1s ease-in;
}


.slimewrapper {
  position: absolute;
  width: 100px;
  height: 65px;
  left: 50%;
  top: 50%;
  z-index: 5;
  transition: all 0.1s;
}

.slimefloorlayer {
  position: relative;
  width: 100%;
  height: 100%;
}

.slimeoutlayer {
  border: 3px solid rgba(0, 0, 0, 0.712);
  border-radius: 100px 100px 100px 50px;
  height: 100%;
  min-width: 80%;
  animation: float 6s ease-in-out infinite;
  /* position: absolute;
  bottom: 0;
  left: 0; */
}

@keyframes float {
  0% {
    transform: scaleX(1);
    width: 90%;
    transform: translateY(0) skewX(0deg);
  }

  50% {
    transform: scaleY(0.8);
    width: 100%;
    transform: translateY(3%) skewX(-10deg);
  }

  100% {
    transform: scaleY(1);
    width: 90%;
    transform: translateY(0) skewX(0deg);
  }
}

.slimesublayer {
  border: 1px solid rgba(255, 255, 255, 0.801);
  border-top: 2px solid rgba(255, 255, 255, 0.801);
  border-left: 2px solid rgba(255, 255, 255, 0.801);
  height: 100%;
  width: 100%;
  border-radius: 100px 100px 100px 50px;
}

.whitedot {
  border-radius: 100%;
  background-color: rgba(255, 255, 255, 0.801);
  position: absolute;
}

.dot1 {
  width: 10%;
  height: 20%;
  top: 15%;
  left: 5%;
  transform: rotate(40deg);
}

.dot2 {
  width: 6%;
  height: 8%;
  top: 40%;
  left: 7%;
}

.slimeinnerlayer {
  background-color: "green";
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: 100px 100px 100px 50px;
  transition: 1s;
  opacity: 0.8;
}

.green {
  background-color: #39DE18;
}

.red {
  background-color: #ff1c14;
}

.blue {
  background: #71c7f0;
}

.eye {
  background-color: black;
  width: 5px;
  height: 100%;
  border-radius: 30px;
  border: 1px solid black;
  transition: 1s;
}

.eyeswrapper {
  overflow: hidden;
  animation: blink 4s linear infinite;
  height: 12px;
  width: 50%;
  position: absolute;
  top: 10%;
  left: 50%;
  margin-left: -20px;
  display: flex;
  justify-content: space-around;
}

@keyframes blink {
  0% {
    transform: scaleY(1);
  }

  25% {
    transform: scaleY(1);
  }

  30% {
    transform: scaleY(0.2);
  }

  35% {
    transform: scaleY(0.2);
  }

  40% {
    transform: scaleY(1);
  }

  100% {
    transform: scaleY(1);
  }
}

.leftredeyes {
  transform: rotate(135deg);
}

.rightredeyes {
  transform: rotate(45deg);
}

.leftblueeyes {
  transform: rotate(45deg);
}

.rightblueeyes {
  transform: rotate(135deg);
}

.slimefoot {
  width: 70%;
  height: 10px;
  position: absolute;
  bottom: 0;
  left: 8%;
  background-color: rgba(48, 48, 48, 0.644);
  border-radius: 100%;
}

@media screen and (max-width: 480px) {
  .slimewrapper {
    width: 70px;
    height: 45px;

  }
}

@media screen and (min-width: 460px) {
  .slimecntr {
    display: none;
  }
}
</style>
