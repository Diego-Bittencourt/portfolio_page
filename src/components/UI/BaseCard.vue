<template>
    <div class="card" :class="color">
        <slot></slot>
    </div>
</template>

<script>
export default {
    inject: ['color'],
    data () {
        return {
            color: this.color
        }
    }
    
}

</script>


<style scoped>
.card {
    /* width: 90%; */
    box-shadow: 0 0 10px rgb(139, 139, 139);
    margin: 0 auto;
    max-width: 35rem;
    /* max-height: 35rem; */
    transition: 0.3s;
    border-radius: 10px;
    cursor: default;
    background-color: #ddd;
}

.blue:hover {
    box-shadow: 0 8px 10px #534094;
}

.red:hover {
    box-shadow: 0 8px 10px #ff1c14;
}

.green:hover {
    box-shadow: 0 8px 10px #4bb020;
}
</style>