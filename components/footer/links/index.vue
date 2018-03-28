
<template>
    <div class='footer_links'>
        <os-footer-link text="best sellers" href="/" class="footer_item"/>
        <os-footer-link text="web project" href="/" class="footer_item"/>
        <os-footer-link text="account" href="/" class="footer_item"/>
        <os-footer-link text="payments" href="/" class="footer_item"/>
    </div>
</template>

<script>
import Link from '@/components/footer/links/link/link'
export default {
  data () {
    return {
    }
  },
  methods: {
  },
  computed: {
  },
  components: {
    'os-footer-link': Link
  }
}
</script>


<style lang='scss'>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';
@import '~assets/sass/grid.scss';
@import '~assets/sass/default.scss';

.footer_links {
    @include row;
}

.footer_item {
  @include col-xs(3);
}


</style>




