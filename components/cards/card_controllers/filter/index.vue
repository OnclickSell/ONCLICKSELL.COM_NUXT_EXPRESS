<template>
<div class='l-filter'>

    <div class="filter_items">
        <os-dropdown :values="values" placeholder="Select"/>
    </div>
    <div class="filter_items">
        <os-dropdown :values="values" placeholder="Select"/>
    </div>
    <div class="filter_items">
        <os-dropdown :values="values" placeholder="Select"/>
    </div>
    <div class="filter_items">
       <no-ssr placeholder="loading..."> <os-slider/></no-ssr>
    </div>

</div>
</template>

<script>
import Dropdown from '@/components/UI/dropdown/index'
import Slider from '@/components/UI/slider/index'

export default {
  data () {
    return {
        values: [
            {name: 'Test', value: 'Test Value'},
            {name: 'Test', value: 'Test Value'},
            {name: 'Test', value: 'Test Value'},
            {name: 'Test', value: 'Test Value'}
        ]
    }
  },
  components: {
    'os-dropdown': Dropdown,
    'os-slider': Slider
  },
  methods: {
    SwitchDisplayMode (mode) {
      this.$emit('SwitchDisplayMode', mode)
    }
  }
}
</script>

<style lang='scss' scoped>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/grid.scss';

.l-filter {
    @include row;
    padding: 12px;
}

.filter_items {
    @include col-xs(12);
    position: relative;
    margin-top: 5px;
    @media all and(min-width: 769px) {
      @include col-xs(3);
    }
}



</style>
