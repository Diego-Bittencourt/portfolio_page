<template>
  <div class="plantwrapper" :style="seedPosition">
    {{ plantSpell }} Testando
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
      this.positionY = numbY;
      this.positionX = numbX;
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
.plantwrapper {
  position: absolute;
  width: 50px;
  height: 50px;
  border: 2px solid green;
}
</style>
