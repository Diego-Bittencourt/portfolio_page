<template>
  <div class="slimewrapper">
    <div class="slimeoutlayer">
      <div class="slimesublayer">
        <div class="slimeinnerlayer">
          <div class="left eye"></div>
          <div class="right eye"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            slimeColor: "green",
        }
    }
}
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
  background-color: green;
  border-radius: 100px 100px 100px 50px;
}

.eye {
  background-color: black;
  width: 5%;
  height: 12px;
  position: absolute;
  top: 10%;
  border-radius: 30px;
  border: 1px solid black;
  animation: blink 4s linear infinite;
}


@keyframes blink {
  0% {
    transform: scaleY(1);
  }

  25% { 
    transform: scaleY(1);
  }

  30% {
    transform: scaleY(0.3);
  }

  35% {
   transform: scaleY(0.3);
  }

  40% {
    transform: scaleY(1);
  }

   100% {
    transform: scaleY(1);
   }
}

.left {
  left:40%;
}

.right {
  right: 30%;
}
</style>