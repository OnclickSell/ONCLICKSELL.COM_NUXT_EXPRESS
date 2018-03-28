
<template>
    <div class='footer_top'>
        <div class="footer_top-title">Onclicksell.com</div>
        <os-footer-links class="footer_top-links"/>
    </div>
</template>

<script>
import FooterLinks from '@/components/footer/links/index'
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
    'os-footer-links':FooterLinks
  }
}
</script>


<style lang='scss'>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';
@import '~assets/sass/grid.scss';
@import '~assets/sass/default.scss';

.footer_top {
    @include row;
    background: #2a2c2d;
}

.footer_top-title {
  padding: 1.8em 0;
  font-size: 0.9em;
  font-weight: bold;
  color: #fdfdfd;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  margin: 0;
  @include col-xs(4);
}

.footer_top-links {
    @include col-xs(8);
}


</style>




