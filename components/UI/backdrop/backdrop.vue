<template>

    <div id="overlay" @click="close">
        <slot></slot>
    </div>
       
</template>
<script>

export default {
  methods: {
    close() {
       this.$emit('close')
    }
  }
}
</script>

<style lang='scss' scoped>
#overlay {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.7);
    z-index: 100000;
    cursor: pointer;
}
</style>

