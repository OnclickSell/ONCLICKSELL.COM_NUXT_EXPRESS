<template>
  <div class='buttons'>
      <os-view v-on:clicked="AddToCollection"/>
      <os-watch v-on:clicked="Love"/>
  </div>
</template>

<script>
import Watch from './watch/watch'
import Add from './add/add'
import View from './view/view'
export default {
  props: {
    listing: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
    }
  },
  methods: {
    AddToCollection() {
      this.$store.dispatch('user/addToCollection', this.listing.id)
    },
    Love() {

    }
  },
  components: {
    'os-add': Add,
    'os-watch': Watch,
    'os-view': View
  }
}
</script>

<style lang='scss'>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';


.buttons {
  padding: 5px;
  position: relative;
  text-align: right;
}
</style>
