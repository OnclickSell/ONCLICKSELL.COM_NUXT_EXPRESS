<template>
    <div class="l-nav_button">
        <div @click="clicked" :class="{'nav_button-active': active}" class="nav_button"></div>
    </div>
</template>

<script>
export default {
 props: {
    active: {
      type: Boolean,
      required: false
    }
 },
 methods: {
    clicked() {
        this.$emit('clicked')
    }
 }
}
</script>


<style lang='scss' scoped>
@import '~assets/sass/grid.scss';
@import '~assets/sass/default.scss';

.l-nav_button {
    text-align: center;
}


.nav_button {
    display: inline-block;
    width: 32px;
    height: 32px;
    background: url(http://res.cloudinary.com/onclicksell-com/image/upload/v1522396512/OnclickSell.com/Icons/Onclicksell.com-icons_copy_3.png);
    background-position: 0 0px;
    background-repeat: no-repeat;
    transition: background 600ms 0s ease
}

.nav_button-active {
    background-position: 0 -32px;
}



</style>




