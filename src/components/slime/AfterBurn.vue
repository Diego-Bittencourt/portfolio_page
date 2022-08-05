<template>
  <div class="burnwrap" :style="burnPosition"></div>
  <p>{{fireSpell}}</p>
  <p>{{posY}}</p>
  <p>{{posX}}</p>
  <p>{{direction}}</p>
  <p>{{burnPosition}}</p>
</template>

<script>
export default {
    props: ['posX', 'posY', 'direction', 'fireSpell'],
    data () {
      return {
        spellCast: this.fireSpell
      }
    },
    computed: {
      burnPosition () {
        if (this.fireSpell) {
        console.log(typeof this.fireSpell)
        return "top: " + this.posY + "%; left: " + this.posX + "%;";
        
        } else {
          return "not yet"
        }
        
      }
    },
    watch: {
      fireSpell (val) {
        console.log("eita", val);
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
