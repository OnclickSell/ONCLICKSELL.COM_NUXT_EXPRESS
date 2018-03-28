
<template>
    <div class="footer_section">
        <div class="footer_section-subscribe">
            <os-footer-subscribe/>
        </div>
    </div>
</template>

<script>
import Subscribe from '@/components/footer/subscribe/index'
export default {
  components: {
    'os-footer-subscribe': Subscribe
  }
}
</script>


<style lang='scss'>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';
@import '~assets/sass/grid.scss';
@import '~assets/sass/default.scss';


.footer_section {
    display: block;
    position: relative;
    text-align: center;
    background: grey;
}

.footer_section-subscribe {
    display: inline-block;
    width: 70%;
}



</style>




