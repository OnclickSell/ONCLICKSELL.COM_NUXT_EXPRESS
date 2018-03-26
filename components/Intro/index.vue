<template>
  <div class="home_intro">
    <os-section 
      class="intro_item" 
      v-for="each in data" 
      :image="each.image" 
      :title="each.title" 
      :description="each.description"/>
  </div>
</template>

<script>
import Section from '@/components/intro/section/index'
import Header from '@/components/intro/header/header'

export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
  },
  components: {
    'os-section': Section,
    'os-header': Header
  }
}
</script>
<style lang='scss' scoped>
@import '~assets/sass/grid.scss';
@import '~assets/sass/default.scss';

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';


.home_intro {
  @include row;
  font-size: 1.2rem;
  padding: 10% 5%;
  position: relative;
  overflow: hidden;
  
}

.home_intro:before {
  content: "";
  position: absolute;
  width: 150%;
  height: 100%;
  top: -44%;
  left: -21%;
  z-index: -1;
  background: #00ffa1;
  -webkit-transform: rotate(-11deg);
  transform: rotate(-11deg);
}

.intro_heading {
  @include col-xs(12);
}

.intro_item {
  @include col-xs(6);

  @media all and (min-width: 960px) {
    @include col-xs(3);
  }
}

</style>
