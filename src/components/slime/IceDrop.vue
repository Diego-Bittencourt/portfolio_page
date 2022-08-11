<template>
    <div class="icewrapper" :style="icePosition">
        <div class="outerwrapper" ></div>
    </div>
</template>

<script>
export default {
    props: ['posX', 'posY', 'direction', 'iceSpell'],
    data() {
        return {
            positionX: 10,
            positionY: 10,
            isShardActive: false,
            isCubeActive: false,
            isWaterActive: false
        }
    },
    methods: {
        updatePosition(numbX, numbY) {
            this.positionX = numbX;
            this.positionY = numbY;
        },
        castAnimation() {

        },
        resetSpell() {
            this.$emit('resetSpell');
        }
    },
    computed: {
        icePosition() {
            return "top: " + this.positionY + "%; left: " + this.positionX + "%;";
        }
    },
    watch: {
        iceSpell() {
            this.updatePosition(this.posX, this.posY);
            this.castAnimation();
            this.resetSpell();
        }
    }
}
</script>

<style scoped>
.icewrapper {
    width: 100px;
    height: 100px;
    border: 1px solid blue;
    position: absolute;
}
</style>