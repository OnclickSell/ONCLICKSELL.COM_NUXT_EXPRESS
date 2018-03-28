<template>
    <div class="footer_bottom">
        <p class="footer_bottom-text">@ 2017 - OnclickSell.com. All rights reserved.</p>
    </div>
</template>

<script>
export default {
}
</script>


<style lang='scss' scoped>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';
@import '~assets/sass/grid.scss';
@import '~assets/sass/default.scss';


.footer_bottom {
    @include row;
    color: #999999;
    padding: 10px;
    text-align: center;
    background: #2a2c2d;
}

.footer_bottom-text {
    @include col-xs(12);
    font-size: 0.8em;
    text-align: center;
}


</style>




