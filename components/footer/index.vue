
<template>

   <div>
       <os-footer-top/>
       <os-footer-section/>
       <os-footer-bottom/>
   </div>

</template>

<script>
import FooterTop from '@/components/footer/top/index'
import FooterSection from '@/components/footer/section/index'
import FooterBottom from '@/components/footer/bottom/index'
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
    'os-footer-top': FooterTop,
    'os-footer-section': FooterSection,
    'os-footer-bottom': FooterBottom
  }
}
</script>


<style lang='scss' scoped>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';




</style>




