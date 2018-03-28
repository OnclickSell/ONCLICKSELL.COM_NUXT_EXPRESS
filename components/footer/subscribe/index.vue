
<template>
  <div class="l-footer_subscribe">
    <os-subscribe-title class="footer_subscribe-title"/>
    <os-subscribe-field class="footer_subscribe-input"/>
    <os-subscribe-button class="footer_subscribe-button"/>
  </div>
</template>

<script>
import SubscribeField from '@/components/footer/subscribe/field/index'
import SubscribeTitle from '@/components/footer/subscribe/title/index'
import SubscribeButton from '@/components/footer/subscribe/button/index'
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
    'os-subscribe-title': SubscribeTitle,
    'os-subscribe-field': SubscribeField,
    'os-subscribe-button': SubscribeButton
  }
}
</script>


<style lang='scss'>

@import '~assets/sass/grid.scss';
@import '~assets/sass/default.scss';


.l-footer_subscribe {
  @include row;
  padding: 3em 0;
}

.footer_subscribe-title {
  @include col-xs(3);
}

.footer_subscribe-input {
  @include col-xs(6);
}

.footer_subscribe-button {
  @include col-xs(3);
}



</style>




