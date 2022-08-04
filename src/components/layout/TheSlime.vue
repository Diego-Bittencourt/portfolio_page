<template>
  <div class="slimewrapper">
    <div class="slimeoutlayer">
      <div class="slimesublayer">
        <div class="slimeinnerlayer" :class="color">
          <div class="eyeswrapper">
          <div class="left eye" :class="lefteyeshape"></div>
          <div class="right eye" :class="righteyeshape"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['color'],
  data() {
    return {
      slimeColor: "green",
      color: this.color
    };
  },
  computed: {
    lefteyeshape () {
      if (this.color.value === "red") {
        return "leftredeyes";
      } else if (this.color.value === "blue") {
        return "leftblueeyes";
      }  else {
        return "leftgreeneyes";
      }
    },
    righteyeshape () {
      if (this.color.value === "red") {
        return "rightredeyes";
      } else if (this.color.value === "blue") {
        return "rightblueeyes";
      }  else {
        return "rightgreeneyes";
      }
    }
  }
};
</script>

<style scoped>
.slimewrapper {
  position: absolute;
  width: 100px;
  height: 75px;
  left: 50%;
  top: 50%;
}

.slimeoutlayer {
  border: 3px solid black;
  border-radius: 100px 100px 100px 50px;
  width: 100%;
  height: 100%;
}

.slimesublayer {
  border: 1px solid white;
  height: 100%;
  width: 100%;
  border-radius: 100px 100px 100px 50px;
}

.slimeinnerlayer {
  background-color: "green";
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: 100px 100px 100px 50px;
  transition: 1s;
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
</style>
