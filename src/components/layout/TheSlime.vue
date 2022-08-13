<template>
      {{reactionHandler}}

<slime-dialog 
    :isCoolDown="isCoolDown"
    :posX="positionX"
    :posY="positionY"
    :direction="slimeDirection"
    :isTalking="isTalking"></slime-dialog>
  <after-burn
    :posX="positionX"
    :posY="positionY"
    :direction="slimeDirection"
    :fireSpell="fireSpell"
    @resetSpell="resetSpell('fire')"
    @fireposition="handleReaction"
  ></after-burn>
  <plant-seed
  :posX="positionX"
  :posY="positionY"
  :direction="slimeDirection"
  :plantSpell="plantSpell"
  @resetSpell="resetSpell('plant')"
  @plantposition="handleReaction"
  ></plant-seed>
  <ice-drop
  :posX="positionX"
  :posY="positionY"
  :direction="slimeDirection"
  :iceSpell="iceSpell"
  @resetSpell="resetSpell('ice')"
  @cubeposition="handleReaction"
  ></ice-drop>
  <div class="slimewrapper" :style="moveSlime">
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
    window.addEventListener("keypress", this.handleKeyPress);
    window.addEventListener("keydown", this.fastFloatTime);
    window.addEventListener("keyup", this.slowFloatTime);
  },
  methods: {
    handleReaction(payload) {
      if (payload.element === 'fire') {
        console.log("fire", payload)
      this.reactionHandler.flameX = payload.flameX;
      this.reactionHandler.flameY = payload.flameY;
      } else if (payload.element === 'ice') {
        console.log('ice', payload)
        this.reactionHandler.iceX = payload.iceX;
        this.reactionHandler.iceY = payload.iceY;
      } else if (payload.element === 'plant') {
        console.log('plant', payload)
        this.reactionHandler.plantX = payload.plantX;
        this.reactionHandler.plantY = payload.plantY;
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
.slimewrapper {
  position: absolute;
  width: 100px;
  height: 65px;
  left: 50%;
  top: 50%;
  z-index: 5;
  transition: 0.1s;
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
  background-color: green;
}

.red {
  background-color: red;
}

.blue {
  background: blue;
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
</style>
