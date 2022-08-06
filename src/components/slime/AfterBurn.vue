<template>
  <div class="burnwrap" :style="burnPosition"></div>
  <p>{{fireSpell}}</p>
  <p>{{positionY}}</p>
  <p>{{posX}}</p>
  <p>{{direction}}</p>
  <p>{{burnPosition}}</p>
  <p>{{positionX}}</p>
</template>

<script>
export default {
    props: ['posX', 'posY', 'direction', 'fireSpell'],
    emits: ['resetSpell'],
    data () {
      return {
        spellCast: this.fireSpell,
        positionX: 10,
        positionY: 10,
        slimeDirection: 1
      }
    },
    methods: {
      resetSpell () {
        this.$emit('resetSpell');
      },
      updatePosition(numbY, numbX) {
        this.positionY = numbY + 9.5;
        this.positionX = numbX + 10* this.direction;
      }
    },
    computed: {
      burnPosition () {
        return "top: " + this.positionY + "%; left: " + this.positionX + "%;";
        // if (this.fireSpell) {
        // // this.positionX = this.posX;
        // // this.positionY = this.posY;
        // // this.slimeDirection = this.direction;
        // return "top: " + this.posY + "%; left: " + this.posX + "%;";
        
        // } else {
        //   return "not yet"
        // }
        
      }
    },
    watch: {
      fireSpell (val) {
        console.log("eita");
        this.updatePosition(this.posY, this.posX);
        this.resetSpell();
        return val;
      }
    }
    
};
</script>

<style scoped>
.burnwrap {
  width: 5%;
  height: 2%;
  background-color: #25252598;
  position: absolute;
  z-index: 5;
  border-radius: 100%;
}
</style>
