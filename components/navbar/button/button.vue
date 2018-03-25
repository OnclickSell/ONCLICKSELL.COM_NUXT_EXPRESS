<template>

    <button 
        @click="clicked"
        height="50px" 
        width="60px">Click</button>
     
</template>

<script>
import Hamburger from '@/assets/icons/hamburger.vue'

export default {
 methods: {
    clicked() {
        this.$emit('clicked')
    }
 },
 components: {
    'os-hamburger': Hamburger
 }
}
</script>


<style lang='scss' scoped>

@import '~assets/sass/grid.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';




</style>




