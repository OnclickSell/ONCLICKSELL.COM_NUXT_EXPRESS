
<template>
  <section class="hero_section">
    <img class="hero_image"/>
    <slot></slot>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      loading: 'isLoading'
    })
  },
  components: {
  }
}
</script>
<style lang='scss' scoped>
@import '~assets/sass/grid.scss';
@import '~assets/sass/default.scss';




.hero_section {
  @include hero;
}

.hero_image {
  @include hero;
  background: url('http://res.cloudinary.com/onclicksell-com/image/upload/v1521968244/OnclickSell.com/hero/stock-vector-programming-and-coding-background-flat-design-program-source-code-software-coding-testing-debugging-495694327.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}


</style>
