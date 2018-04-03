<template>
<div class='l-filter'>

    <div class="filter_items">
        <os-dropdown 
          v-on:selected="updateFrontendPlateform" 
          :values="technologies.frontend.plateform" 
          placeholder="Frontend Plateform"/>
    </div>
    <div class="filter_items">
        <os-dropdown 
          v-on:selected="updateFrontendFramework" 
          :values="technologies.frontend.framework" 
          placeholder="Frontend Framework"/>
    </div>
    <div class="filter_items">
        <os-dropdown 
          v-on:selected="updateBackendPlateform" 
          :values="technologies.backend.plateform" 
          placeholder="Backend Plateform"/>
    </div>
    <div class="filter_items">
        <os-dropdown 
          v-on:selected="updateBackendFramework" 
          :values="technologies.backend.framework" 
          placeholder="Backend Framework"/>
    </div>
    <div class="filter_items">
       <no-ssr placeholder="loading..."> <os-slider v-on:selected="updatePrice" :min="10" :max="1000"/></no-ssr>
    </div>

    <div class="filter_items">
        <button class="filter_items-button" @click="apllyFilter">Appy Filters</button>
    </div>

</div>
</template>

<script>
import Dropdown from '@/components/UI/dropdown/options_dropdown/index'
import Slider from '@/components/UI/slider/index'

export default {
  data () {
    return {
      technologies: {
        frontend: {
          plateform: ['JavaScript', 'Node.js', 'CSS', 'HTML', 'TypeScript'],
          framework: ['Vue.js', 'Angular', 'React.js', 'Jquery', 'Nuxt.js', 'Next.js']
        },
        backend: {
          plateform: ['PHP', 'Node.js', 'Java', 'Python'],
          framework: ['Laravel', 'Codeigniter', 'JawaWeb']
        }
      },
      filter: {
        price: {
          min: null,
          max: null
        },
        frontend: {
          plateform: null,
          framework: null
        },
        backend: {
          plateform: null,
          framework: null
        }
      }
    }
  },
  components: {
    'os-dropdown': Dropdown,
    'os-slider': Slider
  },
  methods: {
    updatePrice(payload) {
      this.filter.price.min = payload.min
      this.filter.price.max = payload.max
    },
    updateFrontendPlateform(value) {
      this.filter.frontend.plateform = value
    },
    updateFrontendFramework(value) {
      this.filter.frontend.framework = value
    },
    updateBackendPlateform(value) {
      this.filter.backend.plateform = value
    },
    updateBackendFramework(value) {
      this.filter.backend.framework = value
    },
    apllyFilter() {
      this.$emit('filterApplied', this.filter)
    },
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
      @include col-xs(4);
    }
}


.filter_items-button {
  padding: 12px;
  background: #3dbf55;
  width: 100%;
  border: none;
  border-radius: 4px;
  color: #FFFFFF;
}


</style>
